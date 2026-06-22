const Alert = ({ type, text, onDismiss }) => {
  const styles =
    type === 'success' ? 'bg-green-500/90 border-green-400' : 'bg-red-500/90 border-red-400';

  return (
    <div
      className={`fixed top-24 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-50 px-5 py-3 rounded-lg border text-white font-medium shadow-lg backdrop-blur-sm flex items-start justify-between gap-3 ${styles}`}
      role="alert"
      aria-live="assertive"
    >
      <p>{text}</p>
      {onDismiss ? (
        <button
          type="button"
          onClick={onDismiss}
          className="shrink-0 text-white/80 hover:text-white text-sm underline underline-offset-2"
          aria-label="Dismiss notification"
        >
          Dismiss
        </button>
      ) : null}
    </div>
  );
};

export default Alert;
