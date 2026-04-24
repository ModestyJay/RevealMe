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
  
            <div>
              <h3 className="search-name">{name}</h3>
              <p className="search-category">{category}</p>
            </div>
          </div>
  
          <p className="search-description">{description}</p>
  
          <div className="search-meta">
            <span>{location}</span>
            <span>{phone}</span>
          </div>
        </article>
      </Link>
    );
  }