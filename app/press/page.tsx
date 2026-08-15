import type {Metadata} from 'next'; import EditorialPage from '@/components/EditorialPage';
export const metadata:Metadata={title:'Press & Media | Wiftco',description:'Media enquiries, product information and Wiftco brand resources.'};
export default function Page(){return <EditorialPage eyebrow="PRESS & MEDIA" title="Wiftco information for media." intro="For media enquiries, accurate product-stage information or Wiftco brand resources, contact our team directly. We do not list coverage that cannot be independently verified." items={[
{title:'Product information',body:'Request an up-to-date overview of Wiftco’s application, communication vision and current product status.'},
{title:'Leadership enquiries',body:'Interview and company-information requests are reviewed individually.'},
{title:'Brand resources',body:'Approved logos and product imagery are available for legitimate editorial use on request.'}]} cta={{label:'Contact Wiftco',href:'mailto:partnerships@wiftco.com'}}/>}
