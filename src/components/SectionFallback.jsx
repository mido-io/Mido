const SectionFallback = ({ minHeight = '50vh', label = 'Loading section…' }) => (
  <div
    className="c-space my-20 flex flex-col items-center justify-center gap-4"
    style={{ minHeight }}
    aria-busy="true"
    aria-live="polite"
  >
    <div className="flex items-end gap-1.5" aria-hidden="true">
      <span className="canvas-loader-bar" />
      <span className="canvas-loader-bar canvas-loader-bar--middle" />
      <span className="canvas-loader-bar canvas-loader-bar--last" />
    </div>
    <p className="sr-only">{label}</p>
  </div>
);

export default SectionFallback;
