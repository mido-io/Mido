const SectionHeader = ({ title, subtitle, className = '' }) => (
  <header className={className}>
    <h2 className="head-text">{title}</h2>
    {subtitle ? <p className="section-intro">{subtitle}</p> : null}
  </header>
);

export default SectionHeader;
