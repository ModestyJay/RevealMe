import { Link } from "react-router-dom";

export default function Actions({
  primaryText,
  secondaryText,
  primaryHref,
  secondaryHref,
}) {
  return (
    <div className="actions">
      {primaryHref ? (
        <Link to={primaryHref} className="btn btn-primary">
          {primaryText}
        </Link>
      ) : (
        <button className="btn btn-primary" type="button">
          {primaryText}
        </button>
      )}

      {secondaryHref && (
        <Link to={secondaryHref} className="btn btn-secondary btn-link">
          {secondaryText}
        </Link>
      )}
    </div>
  );
}