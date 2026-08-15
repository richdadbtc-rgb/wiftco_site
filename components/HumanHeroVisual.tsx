const people = [
  { initials: 'CO', tone: '#6d28d9', label: 'You' },
  { initials: 'TM', tone: '#10b981', label: 'Your people' },
  { initials: 'B', tone: '#7c3aed', label: 'Ben' },
];

export default function HumanHeroVisual({ business = false }: { business?: boolean }) {
  return <div className="human-hero-visual" aria-label={business ? 'Wiftco partnership collaboration' : 'People connecting through Wiftco'}>
    <div className="human-orbit" aria-hidden="true" />
    <div className="human-avatars">{people.map((person,index)=><div className={`human-avatar avatar-${index+1}`} key={person.label}><span style={{background:person.tone}}>{person.initials}</span><small>{person.label}</small></div>)}</div>
    <div className="human-message message-one">{business ? 'Let’s connect our platforms.' : 'Made it home? 👋'}</div>
    <div className="human-message message-two">{business ? 'Let’s build it properly. 🤝' : 'Yes — calling you now.'}</div>
    <div className="human-centre"><img src="/wiftco%20icon.png" alt=""/><b>Wiftco</b><small>{business ? 'People + technology + partners' : 'One place to stay close'}</small></div>
  </div>;
}
