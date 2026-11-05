import { Fragment } from 'react';

// Incoming mail is text, never trusted HTML. React escapes every text fragment.
function inline(text: string) {
  const tokens = /(\*?[^\s<>]+\*?)[ \t]*\n?[ \t]*<(https?:\/\/[^\s<>]+)>|<(https?:\/\/[^\s<>]+)>|(https?:\/\/[^\s<>]+)|\*([^*\n]+)\*/g;
  const parts = [];
  let offset = 0;
  for (const match of Array.from(text.matchAll(tokens))) {
    parts.push(text.slice(offset, match.index));
    const rawUrl = match[2] || match[3] || match[4];
    if (rawUrl) {
      // Bare URLs may end in sentence punctuation; keep it outside the link.
      const url = match[4] ? rawUrl.replace(/[.,;!?]+$/, '') : rawUrl;
      try {
        const parsed = new URL(url);
        if (!['https:', 'http:'].includes(parsed.protocol) || parsed.username || parsed.password) throw new Error('Unsafe URL');
        const label = match[1]?.replace(/^\*|\*$/g, '') || parsed.hostname.replace(/^www\./, '');
        parts.push(<Fragment key={match.index}><a href={url} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" title={`Open link on ${parsed.hostname}`}>{label}</a>{match[4] ? rawUrl.slice(url.length) : ''}{!match[4] && /^[A-Za-z0-9]/.test(text.slice(match.index! + match[0].length)) ? ' ' : ''}</Fragment>);
      } catch {
        parts.push(match[0]);
      }
    } else {
      parts.push(<strong key={match.index}>{match[5]}</strong>);
    }
    offset = match.index! + match[0].length;
  }
  parts.push(text.slice(offset));
  return parts;
}

function paragraphs(text: string) {
  return text.trim().split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => {
    const lines = paragraph.split('\n');
    if (lines.every(line => /^\s*(?:[–•-]|\d+\.)\s/.test(line))) {
      return <ul key={index}>{lines.map((line, item) => <li key={item}>{inline(line.replace(/^\s*(?:[–•-]|\d+\.)\s+/, ''))}</li>)}</ul>;
    }
    // Plain-text email uses hard line wrapping, which should flow with the pane.
    return <p key={index}>{inline(paragraph).map((part, item) => typeof part === 'string' ? <Fragment key={item}>{part.replace(/\n/g, ' ')}</Fragment> : part)}</p>;
  });
}

export default function EmailBody({ body }: { body: string }) {
  const text = body.replace(/\r\n?/g, '\n');
  const quote = /^(?:On [^\n]*(?:\n[^\n]*){0,3}?wrote:|[-]{2,}\s*(?:Original|Forwarded) message[^\n]*|>[^\n]*)/im.exec(text);
  const current = quote ? text.slice(0, quote.index) : text;
  return <div className="crm-reader-body crm-email-content">
    {paragraphs(current)}
    {quote && <details className="crm-quoted-email"><summary>Show previous conversation</summary>{paragraphs(text.slice(quote.index).replace(/^> ?/gm, ''))}</details>}
  </div>;
}
