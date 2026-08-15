import Nav from './Nav';
import Footer from './Footer';
import Container from './Container';
import Link from 'next/link';

export type EditorialItem={title:string;body:string;tag?:string};
export default function EditorialPage({eyebrow,title,intro,items,cta}:{eyebrow:string;title:string;intro:string;items:EditorialItem[];cta?:{label:string;href:string}}){return <main className="marketing-page"><Nav/><section className="hero-section" style={{minHeight:'auto',paddingBottom:84}}><Container><div style={{maxWidth:850}}><span className="eyebrow">{eyebrow}</span><h1 style={{fontSize:'clamp(44px,7vw,76px)',lineHeight:1,letterSpacing:'-2.5px',margin:'18px 0 24px'}}>{title}</h1><p className="hero-lead">{intro}</p>{cta&&<Link href={cta.href} className="button primary" style={{marginTop:28}}>{cta.label}</Link>}</div></Container></section><section className="section"><Container><div className="feature-grid">{items.map(item=><article className="feature-card" key={item.title}>{item.tag&&<span className="status-tag">{item.tag}</span>}<h2 style={{fontSize:25,margin:'28px 0 12px'}}>{item.title}</h2><p>{item.body}</p></article>)}</div></Container></section><Footer/></main>}
