const variantClass = {
  primary: 'hero-btn',
  secondary: 'hero-btn hero-btn--ghost',
  brutal: 'hero-btn',
  'brutal-ghost': 'hero-btn hero-btn--ghost',
  default: 'hero-btn',
};

const Button = ({
  name,
  isBeam = false,
  containerClass,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  disabled = false,
  download,
  target,
  rel,
}) => {
  const className = `${variantClass[variant] ?? variantClass.primary} ${containerClass ?? ''}`.trim();

  const content = (
    <>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={className} download={download} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
