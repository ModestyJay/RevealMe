import { Link } from "react-router-dom";

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
          <div className="search-avatar">
                {image ? (
                <img src={image} alt={name} />
                ) : (
                name.charAt(0)
                )}
            </div>
  
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