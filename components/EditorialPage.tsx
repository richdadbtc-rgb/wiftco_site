import Nav from './Nav';
import Footer from './Footer';
import Container from './Container';
import Link from 'next/link';

export type EditorialItem={title:string;body:string;tag?:string};
const heroImages:Record<string,{src:string;alt:string}>={
  PRODUCT:{src:'/people/product-call.png',alt:'A Nigerian woman enjoying a phone conversation'},
  PLANS:{src:'/people/plans-early-access.png',alt:'A Nigerian man using his phone in a cafe'},
  'BUSINESS & TECHNOLOGY':{src:'/people/partnership-team.png',alt:'Nigerian technology leaders discussing a partnership'},
  'SECURITY BY DESIGN':{src:'/people/security-engineers.png',alt:'Nigerian engineers reviewing platform security'},
  'ABOUT WIFTCO':{src:'/people/about-team.png',alt:'The spirit of a collaborative Nigerian product team'},
  'PRESS & MEDIA':{src:'/people/press-interview.png',alt:'A Nigerian technology leader in a media conversation'},
};
export default function EditorialPage({eyebrow,title,intro,items,cta}:{eyebrow:string;title:string;intro:string;items:EditorialItem[];cta?:{label:string;href:string}}){const image=heroImages[eyebrow]||heroImages.PRODUCT;return <main className="marketing-page"><Nav/><section className="hero-section editorial-hero"><Container><div className="editorial-hero-grid"><div><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p className="hero-lead">{intro}</p>{cta&&<Link href={cta.href} className="button primary" style={{marginTop:28}}>{cta.label}</Link>}<p className="human-note">Built thoughtfully in Nigeria, for everyday moments that matter.</p></div><figure className="people-hero"><img src={image.src} alt={image.alt}/><figcaption>Technology feels better when it starts with people.</figcaption></figure></div></Container></section><section className="section"><Container><div className="feature-grid">{items.map(item=><article className="feature-card" key={item.title}>{item.tag&&<span className="status-tag">{item.tag}</span>}<h2 style={{fontSize:25,margin:'28px 0 12px'}}>{item.title}</h2><p>{item.body}</p></article>)}</div></Container></section><Footer/></main>}
