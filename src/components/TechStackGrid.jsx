import { techStackRows } from '../constants/techStack.js';

const iconUrl = (slug, color) => `https://cdn.simpleicons.org/${slug}/${color}`;

const MarqueeItem = ({ item }) => (
  <div className="tech-marquee-item" title={item.name}>
    <span className="tech-marquee-icon-wrap">
      <img
        src={iconUrl(item.slug, 'afb0b6')}
        alt={item.name}
        className="tech-marquee-icon tech-marquee-icon--muted"
        loading="lazy"
      />
      <img
        src={iconUrl(item.slug, item.color)}
        alt=""
        aria-hidden="true"
        className="tech-marquee-icon tech-marquee-icon--color"
        loading="lazy"
      />
    </span>
    <span className="tech-marquee-name">{item.name}</span>
  </div>
);

const MarqueeRow = ({ items, reverse = false, duration = '32s' }) => {
  const loop = [...items, ...items];

  return (
    <div className={`tech-marquee ${reverse ? 'tech-marquee--reverse' : ''}`}>
      <div className="tech-marquee-track" style={{ '--marquee-duration': duration }}>
        {loop.map((item, index) => (
          <MarqueeItem key={`${item.slug}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
};

const TechStackGrid = () => {
  return (
    <div className="tech-stack-visual">
      {techStackRows.map((row, index) => (
        <MarqueeRow
          key={index}
          items={row.items}
          reverse={row.reverse}
          duration={row.duration}
        />
      ))}
    </div>
  );
};

export default TechStackGrid;
