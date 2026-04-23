import { Link } from "react-router-dom";

export default function Actions({ primaryText, secondaryText }) {
  return (
    <div className="actions">
      <button className="btn btn-primary">{primaryText}</button>

      <Link to="/profil/marko-elektricar" className="btn btn-secondary btn-link">
        {secondaryText}
      </Link>
    </div>
  );
}