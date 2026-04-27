import { Link } from "react-router-dom";
import Avatar from "./Avatar/Avatar";

export default function ProfileSearchCard({
  slug,
  name,
  category,
  location,
  description,
  phone,
  image,
}) {
  return (
    <Link to={`/profil/${slug}`} className="search-card-link">
      <article className="search-card">
        <div className="search-card-top">
          <Avatar name={name} category={category} image={image} />

          <div className="search-headings">
            <h3 className="search-name">{name}</h3>
            <p className="search-category">{category}</p>
            <p className="search-location">{location}</p>
          </div>
        </div>

        <p className="search-description">{description}</p>

        <div className="search-footer">
          <span className="search-phone">{phone}</span>
          <span className="search-arrow">→</span>
        </div>
      </article>
    </Link>
  );
}