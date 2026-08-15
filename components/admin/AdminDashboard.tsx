'use client';

import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

type AnyRow = Record<string, any>;
type Session = { email: string; first_name: string; last_name: string; is_superuser: boolean };
const sections = [
  ['dashboard','Dashboard','⌂',''],
  ['users','Users','♙','MANAGEMENT'], ['kyc','KYC Verification','◇',''], ['subscribers','Email Subscribers','✉',''], ['campaigns','Email Campaigns','⚡',''],
  ['wallets','Wallets','▣','SERVICES'], ['transactions','Transactions','↔',''], ['esims','eSIM Management','◉',''], ['telecom','Telecom','⌁',''],
  ['partnerships','Overview','◆','PARTNERSHIPS'], ['companies','Companies','▦',''], ['contacts','Contacts','♙',''], ['outreach','Outreach','✉',''], ['templates','Templates','▤',''], ['followups','Follow-ups','◷',''], ['documents','Documents','▧',''], ['partnership_settings','Settings','⚙',''],
  ['inbox','Inbox','▰',''], ['delivery_events','Delivery Events','✓',''],
  ['posts','Feed Posts','▤','SOCIAL'], ['comments','Comments','☵',''], ['reactions','Reactions','☆',''],
  ['messages','Messages','▰','COMMUNICATION'],
  ['admins','Admins','♟','SYSTEM'], ['roles','Roles & Permissions','⬡',''], ['support','Support','?',''], ['audit','Audit Logs','▧',''],
];
const sectionInfo: Record<string,[string,string]> = {
  users:['Users','Review accounts, verification and access'], wallets:['Wallets','Monitor customer wallet balances'],
  transactions:['Transactions','Track all wallet activity'], esims:['eSIM Management','Monitor customer eSIMs'],
  kyc:['KYC Verification','Review verification status without exposing sensitive identity numbers'], subscribers:['Email Subscribers','Manage launch and product update subscribers'], campaigns:['Email Campaigns','Monitor marketing campaign delivery'], telecom:['Telecom operations','Live provider and calling health'],
  partnerships:['Partnerships','Manage the telecom outreach pipeline'], marketing:['Marketing','Subscribers and email campaign delivery'],
  companies:['Partnership Companies','Track prospective and active partners'], contacts:['Partnership Contacts','Manage partner contacts'], outreach:['Partnership Outreach','Compose, send and track partnership emails'], templates:['Email Templates','Manage partnership outreach templates'], followups:['Follow-ups','Track upcoming partnership actions'], documents:['Partnership Documents','Review shared partnership materials'], partnership_settings:['Partnership Settings','Configure outreach sender details'], inbox:['Partnership Inbox','Read replies received through Resend'], delivery_events:['Delivery Events','Track delivered, delayed, bounced and failed messages'], posts:['Feed Posts','Moderate social feed posts'], comments:['Comments','Review user comments'], reactions:['Reactions','Monitor feed reactions'], messages:['Messages','Review platform messaging activity'], admins:['Administrators','Review staff accounts'], roles:['Roles & Permissions','Review administrator permission groups'], support:['Support','Resolve customer support requests'], audit:['Audit logs','Review administrator actions'],
};

async function api(path: string, init?: RequestInit) {
  const response = await fetch(`/api/admin/proxy/${path}`, { ...init, cache: 'no-store' });
  if (response.status === 401) throw new Error('SESSION_EXPIRED');
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(body.detail || 'Request failed');
  return body;
}
const pretty = (key: string) => key.replaceAll('_',' ').replace(/\b\w/g, letter => letter.toUpperCase());
const display = (value: any, key='') => {
  if (value === null || value === undefined || value === '') return '—';
  if (typeof value === 'boolean') return value ? 'Yes' : 'No';
  if (key.includes('amount') || key.includes('balance') || key.includes('volume') || key.includes('revenue') || key.includes('cost')) {
    const number = Number(value); if (!Number.isNaN(number)) return `₦${number.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`;
  }
  if ((key.includes('date') || key.includes('_at') || key === 'joined') && !Number.isNaN(Date.parse(value))) return new Date(value).toLocaleString();
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
};

function DataTable({ rows, onToggle }: { rows: AnyRow[]; onToggle?: (row: AnyRow) => void }) {
  const keys = useMemo(() => {
    const preferred = ['name','email','user','company','reference','subject','type','status','balance','amount','active','verified','created_at','joined'];
    const all = Array.from(new Set(rows.flatMap(Object.keys))).filter(k => k !== 'id' && !['message','content'].includes(k));
    return [...preferred.filter(k => all.includes(k)), ...all.filter(k => !preferred.includes(k))].slice(0, 7);
  }, [rows]);
  if (!rows.length) return <div className="empty-state"><b>No records yet</b><span>New activity will appear here automatically.</span></div>;
  return <div className="table-wrap"><table><thead><tr>{keys.map(k => <th key={k}>{pretty(k)}</th>)}{onToggle && <th>Action</th>}</tr></thead>
    <tbody>{rows.map((row, index) => <tr key={row.id ?? index}>{keys.map(key => <td key={key}>{['status','active','verified','priority'].includes(key) ? <span className={`status status-${String(row[key]).toLowerCase()}`}>{display(row[key],key)}</span> : display(row[key],key)}</td>)}{onToggle && <td><button className="tiny-button" onClick={() => onToggle(row)}>{row.active ? 'Deactivate' : 'Activate'}</button></td>}</tr>)}</tbody></table></div>;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [section,setSection] = useState('dashboard'); const [session,setSession] = useState<Session|null>(null);
  const [data,setData] = useState<any>(null); const [loading,setLoading] = useState(true); const [error,setError] = useState('');
  const [menu,setMenu] = useState(false); const [search,setSearch] = useState('');
  const [crm,setCrm] = useState<any>(null);

  const load = useCallback(async () => {
    setLoading(true); setError('');
    try {
      let result:any;
      if (section === 'dashboard') result = await api('overview');
      else if (section === 'telecom') {
        const resources = ['system-health','metrics','calls','providers','numbers','assignments','cdrs','rates','webhook-events','fraud-alerts'];
        const values = await Promise.all(resources.map(p => api(`telecom/${p}`)));
        result = Object.fromEntries(resources.map((key,index)=>[key.replaceAll('-','_'),values[index]]));
      } else if (['subscribers','campaigns'].includes(section)) result = (await api('marketing'))[section];
      else if (['partnerships','companies','contacts','outreach','templates','followups','documents','partnership_settings','inbox','delivery_events'].includes(section)) {
        const partnership = await api('partnerships');
        const key = section === 'outreach' ? 'emails' : section === 'partnership_settings' ? 'settings' : section;
        setCrm(partnership); result = section === 'partnerships' ? partnership : partnership[key];
      } else if (['posts','comments','reactions','messages'].includes(section)) result = (await api('content'))[section];
      else if (section === 'admins') result = await api(`users?status=staff&search=${encodeURIComponent(search)}`);
      else result = await api(`${section}${['users','kyc','wallets','transactions','esims','audit'].includes(section) ? `?search=${encodeURIComponent(search)}` : ''}`);
      setData(result);
    } catch (reason:any) { if (reason.message === 'SESSION_EXPIRED') router.replace('/admin/login'); else setError(reason.message); }
    finally { setLoading(false); }
  },[section,search,router]);

  useEffect(() => { fetch('/api/admin/auth/session').then(async r => { if (!r.ok) throw 0; setSession(await r.json()); }).catch(() => router.replace('/admin/login')); },[router]);
  useEffect(() => { const timer=setTimeout(load, search ? 300 : 0); return () => clearTimeout(timer); },[load,search]);

  async function logout() { await fetch('/api/admin/auth/logout',{method:'POST'}); router.replace('/admin/login'); router.refresh(); }
  async function toggleUser(row:AnyRow) { await api(`users/${row.id}`,{method:'PATCH',headers:{'Content-Type':'application/json'},body:JSON.stringify({is_active:!row.active})}); load(); }

  const title = section === 'dashboard' ? ['Dashboard',`Welcome back, ${session?.first_name || 'Admin'}. Here’s what’s happening with Wiftco.`] : sectionInfo[section];
  return <main className="admin-shell">
    <aside className={`admin-sidebar ${menu?'open':''}`}>
      <div className="sidebar-brand"><Image src="/wiftco%20icon.png" alt="" width={38} height={38}/><strong>Wiftco<span>Admin</span></strong><button onClick={()=>setMenu(false)}>×</button></div>
      <nav>{sections.map(([id,label,icon,group])=><div key={id}>{group&&<small>{group}</small>}<button className={section===id?'active':''} onClick={()=>{setSection(id);setSearch('');setMenu(false)}}><i>{icon}</i>{label}<em>›</em></button></div>)}</nav>
      <div className="system-online"><i/> System online</div>
    </aside>
    <section className="admin-main">
      <header className="admin-topbar"><button className="menu-button" onClick={()=>setMenu(true)}>☰</button><div className="global-search">⌕ <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search current section…" /></div><div className="admin-identity"><span><b>{session?.first_name || 'Admin'} {session?.last_name}</b><small>{session?.is_superuser?'Super Admin':'Administrator'}</small></span><div className="avatar">{session?.first_name?.[0] || 'A'}</div><button onClick={logout}>Log out</button></div></header>
      <div className="admin-content"><div className="page-heading"><div><h1>{title?.[0]}</h1><p>{title?.[1]}</p></div><button className="refresh" onClick={load}>↻ Refresh</button></div>
        {loading ? <div className="loading-grid">{[1,2,3,4].map(i=><i key={i}/>)}</div> : error ? <div className="error-panel"><b>Could not load this section</b><span>{error}</span><button onClick={load}>Try again</button></div> : section==='dashboard' ? <Dashboard data={data}/> : <Section section={section} data={data} crm={crm} reload={load} toggleUser={toggleUser}/>}
      </div>
    </section>
  </main>;
}

function Dashboard({data}:{data:any}) {
  const m=data?.metrics||{}; const cards=[['Total users',m.total_users,'♙','violet'],['Active users',m.active_users,'✓','green'],['Wallet balance',m.wallet_balance,'▣','blue'],['Transactions',m.transactions,'⇄','orange'],['Active eSIMs',m.active_esims,'▤','pink']];
  return <><div className="metric-grid">{cards.map(([label,value,icon,color])=><article className="metric-card" key={String(label)}><div><span>{label}</span><strong>{label==='Wallet balance'?display(value,'balance'):Number(value||0).toLocaleString()}</strong><small>Live system total</small></div><i className={String(color)}>{icon}</i></article>)}</div>
  <div className="dashboard-grid"><article className="panel wide"><PanelTitle title="Recent users" subtitle={`${m.verified_users||0} verified accounts`}/><DataTable rows={data.recent_users||[]}/></article><article className="panel"><PanelTitle title="System snapshot"/><div className="snapshot"><div><b>{m.open_support||0}</b><span>Open support</span></div><div><b>{m.partnership_prospects||0}</b><span>Partnership leads</span></div><div><b>{m.marketing_subscribers||0}</b><span>Subscribers</span></div><div><b>{display(m.transaction_volume,'volume')}</b><span>Transaction volume</span></div></div></article><article className="panel full"><PanelTitle title="Recent transactions"/><DataTable rows={data.recent_transactions||[]}/></article></div></>;
}
function PanelTitle({title,subtitle}:{title:string,subtitle?:string}) { return <div className="panel-title"><div><h2>{title}</h2>{subtitle&&<span>{subtitle}</span>}</div></div>; }
function Section({section,data,crm,reload,toggleUser}:{section:string,data:any,crm:any,reload:()=>void,toggleUser:(r:AnyRow)=>void}) {
  if (section==='telecom') return <div className="dashboard-grid"><article className="panel full"><PanelTitle title="System health"/><ObjectCards value={data.system_health}/></article><article className="panel full"><PanelTitle title="Telecom metrics"/><ObjectCards value={data.metrics}/></article>{Object.entries(data).filter(([key])=>!['system_health','metrics'].includes(key)).map(([key,value]:[string,any])=><article className="panel full" key={key}><PanelTitle title={pretty(key)}/><DataTable rows={value?.results||value?.items||(Array.isArray(value)?value:[])}/></article>)}</div>;
  if (section==='partnerships') return <div className="stacked-panels">{Object.entries(data||{}).map(([key,value])=><article className="panel" key={key}><PanelTitle title={pretty(key)}/><DataTable rows={Array.isArray(value)?value:[]}/></article>)}</div>;
  const rows=Array.isArray(data)?data:(data?.results||[]);
  const crmSection=['companies','contacts','outreach','templates','followups','documents','partnership_settings'].includes(section);
  return <>{crmSection&&<CrmAction section={section} crm={crm} reload={reload}/>}<article className="panel full"><PanelTitle title={`${pretty(section)} (${data?.count ?? rows.length})`}/><DataTable rows={rows} onToggle={['users','admins'].includes(section)?toggleUser:undefined}/></article></>;
}
function ObjectCards({value}:{value:any}) { const entries=Object.entries(value?.metrics||value||{}).filter(([,v])=>['string','number','boolean'].includes(typeof v)); return <div className="object-cards">{entries.map(([key,val])=><div key={key}><span>{pretty(key)}</span><b>{display(val,key)}</b></div>)}</div>; }

function CrmAction({section,crm,reload}:{section:string,crm:any,reload:()=>void}) {
  const [open,setOpen]=useState(false); const [busy,setBusy]=useState(false); const [notice,setNotice]=useState('');
  const companies=crm?.companies||[]; const contacts=crm?.contacts||[];
  const labels:Record<string,string>={companies:'Add company',contacts:'Add contact',outreach:'Compose email',templates:'New template',followups:'Schedule follow-up',documents:'Upload document',partnership_settings:'Edit settings'};
  async function submit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault(); setBusy(true); setNotice(''); const form=new FormData(event.currentTarget); const raw=Object.fromEntries(form.entries()) as AnyRow;
    let path=`partnerships/${section}`; let method='POST'; let body:AnyRow={...raw};
    if(section==='companies') body={...raw,priority:'medium'};
    if(section==='contacts') body={...raw,primary_contact:form.has('primary_contact')};
    if(section==='templates') body={...raw,is_active:true};
    if(section==='outreach'){path='partnerships/emails';body={...raw,send_now:true,follow_up_at:raw.follow_up_at||null};}
    if(section==='partnership_settings'){path='partnerships/settings';method='PATCH';}
    try{if(section==='documents')await api('partnerships/documents',{method:'POST',body:form});else await api(path,{method,headers:{'Content-Type':'application/json'},body:JSON.stringify(body)});setNotice(section==='outreach'?'Email accepted for delivery.':'Saved successfully.');setOpen(false);reload();}
    catch(reason:any){setNotice(reason.message||'Could not save.');}finally{setBusy(false);}
  }
  return <div className="crm-actions"><div><b>CRM actions</b><span>Create records and communicate without leaving Wiftco Admin.</span></div><button className="primary-button" onClick={()=>setOpen(true)}>＋ {labels[section]}</button>{notice&&<small>{notice}</small>}
    {open&&<div className="modal-backdrop" onMouseDown={()=>setOpen(false)}><form className="crm-modal" onSubmit={submit} onMouseDown={e=>e.stopPropagation()}><header><div><span className="eyebrow">PARTNERSHIP CRM</span><h2>{labels[section]}</h2></div><button type="button" onClick={()=>setOpen(false)}>×</button></header><CrmFields section={section} companies={companies} contacts={contacts} settings={crm?.settings?.[0]}/><footer><button type="button" className="tiny-button" onClick={()=>setOpen(false)}>Cancel</button><button className="primary-button" disabled={busy}>{busy?'Saving…':section==='outreach'?'Send email':'Save'}</button></footer></form></div>}
  </div>;
}

function CrmFields({section,companies,contacts,settings}:{section:string,companies:AnyRow[],contacts:AnyRow[],settings:any}) {
  const companySelect=<label>Company<select name="company_id" required defaultValue=""><option value="" disabled>Select company</option>{companies.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select></label>;
  if(section==='companies') return <div className="form-grid"><label>Company name<input name="company_name" required/></label><label>Country<input name="country" required/></label><label>Company type<select name="company_type" required><option value="mno">Mobile Network Operator</option><option value="mvno">MVNO</option><option value="voip">VoIP Provider</option><option value="cpaas">CPaaS</option><option value="esim">eSIM Provider</option><option value="payment">Payment Provider</option></select></label><label>Interest<select name="partnership_interest"><option value="multiple">Multiple</option><option value="virtual_numbers">Virtual numbers</option><option value="pstn">PSTN calling</option><option value="esim">eSIM</option><option value="sms">SMS</option><option value="payments">Payments</option></select></label><label className="span-2">Website<input name="website" type="url"/></label><label className="span-2">Notes<textarea name="notes"/></label></div>;
  if(section==='contacts') return <div className="form-grid">{companySelect}<label>First name<input name="first_name" required/></label><label>Last name<input name="last_name"/></label><label>Email<input name="email" type="email" required/></label><label>Job title<input name="job_title"/></label><label>Department<input name="department"/></label><label className="check"><input name="primary_contact" type="checkbox"/> Primary contact</label></div>;
  if(section==='outreach') return <div className="form-grid">{companySelect}<label>Contact<select name="contact_id" required defaultValue=""><option value="" disabled>Select contact</option>{contacts.map(c=><option key={c.id} value={c.id}>{c.name} — {c.email}</option>)}</select></label><label className="span-2">Subject<input name="subject" required placeholder="Wiftco × {{company_name}}"/></label><label className="span-2">Message<textarea name="body" required rows={8} placeholder="Hello {{first_name}}, ..."/></label><label>CC<input name="cc" placeholder="Optional, comma-separated"/></label><label>BCC<input name="bcc" placeholder="Optional, comma-separated"/></label><label>Follow-up date<input name="follow_up_at" type="datetime-local"/></label></div>;
  if(section==='templates') return <div className="form-grid"><label>Name<input name="name" required/></label><label>Subject<input name="subject" required/></label><label className="span-2">Template body<textarea name="html_body" rows={9} required/></label></div>;
  if(section==='followups') return <div className="form-grid">{companySelect}<label>Contact<select name="contact_id"><option value="">No contact</option>{contacts.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select></label><label>Due date<input name="due_at" type="datetime-local" required/></label><label className="span-2">Note<textarea name="note"/></label></div>;
  if(section==='documents') return <div className="form-grid"><label>Title<input name="title" required/></label><label>Document type<select name="document_type"><option value="company_profile">Company profile</option><option value="architecture">Architecture overview</option><option value="proposal">Partnership proposal</option><option value="capability">Capability sheet</option><option value="nda">NDA</option><option value="api_requirements">API requirements</option><option value="meeting_notes">Meeting notes</option><option value="other">Other</option></select></label><label>Company<select name="company_id"><option value="">General document</option>{companies.map(c=><option key={c.id} value={c.id}>{c.name}</option>)}</select></label><label>File<input name="document" type="file" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" required/></label></div>;
  return <div className="form-grid"><label>Sender name<input name="sender_name" defaultValue={settings?.sender_name||'Wiftco Partnerships'} required/></label><label>Sender title<input name="sender_title" defaultValue={settings?.sender_title||'Partnerships Team'} required/></label><label>Reply-to address<input name="reply_to" type="email" defaultValue={settings?.reply_to||''}/></label><label>Website<input name="website" type="url" defaultValue={settings?.website||'https://www.wiftco.com'} required/></label><label className="span-2">Company address<input name="company_address" defaultValue={settings?.company_address||''}/></label></div>;
}
