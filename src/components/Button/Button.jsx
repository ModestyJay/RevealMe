export default function Button({
    children,
    variant = "primary",
    href,
    onClick,
    download,
    target,
    rel,
    fullWidth = false,
  }) {
    const className = `btn btn-${variant} ${fullWidth ? "btn-full" : ""}`;
  
    if (href) {
      return (
        <a
          href={href}
          className={className}
          onClick={onClick}
          download={download}
          target={target}
          rel={rel}
        >
          {children}
        </a>
      );
    }
  
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }