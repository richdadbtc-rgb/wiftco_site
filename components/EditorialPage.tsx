import Nav from './Nav';
import Footer from './Footer';
import Container from './Container';
import Link from 'next/link';
import HumanHeroVisual from './HumanHeroVisual';

export type EditorialItem={title:string;body:string;tag?:string};
export default function EditorialPage({eyebrow,title,intro,items,cta}:{eyebrow:string;title:string;intro:string;items:EditorialItem[];cta?:{label:string;href:string}}){return <main className="marketing-page"><Nav/><section className="hero-section editorial-hero"><Container><div className="editorial-hero-grid"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="hero-lead">{intro}</p>{cta&&<Link href={cta.href} className="button primary" style={{marginTop:28}}>{cta.label}</Link>}<p className="human-note">Built thoughtfully in Nigeria, for everyday moments that matter.</p></div><HumanHeroVisual business={eyebrow.includes('BUSINESS')}/></div></Container></section><section className="section"><Container><div className="feature-grid">{items.map(item=><article className="feature-card" key={item.title}>{item.tag&&<span className="status-tag">{item.tag}</span>}<h2 style={{fontSize:25,margin:'28px 0 12px'}}>{item.title}</h2><p>{item.body}</p></article>)}</div></Container></section><Footer/></main>}
