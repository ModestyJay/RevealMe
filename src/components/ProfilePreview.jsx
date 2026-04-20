export default function ProfilePreview({
    name,
    category,
    description,
    location,
    phone,
  }) {
    return (
      <section className="profile-preview">
        <p className="section-label">Profil</p>
        <h2 className="section-title">Digitalna lična karta</h2>
  
        <article className="profile-card">
          <div className="profile-top">
            <div className="avatar">{name.charAt(0)}</div>
  
            <div className="profile-headings">
              <h3 className="profile-name">{name}</h3>
              <p className="profile-category">{category}</p>
            </div>
          </div>
  
          <p className="profile-description">{description}</p>
  
          <div className="profile-details">
            <div className="detail-item">
              <span className="detail-label">Lokacija</span>
              <span className="detail-value">{location}</span>
            </div>
  
            <div className="detail-item">
              <span className="detail-label">Telefon</span>
              <span className="detail-value">{phone}</span>
            </div>
          </div>
  
          <div className="profile-actions">
            <button className="btn btn-primary">Pozovi</button>
            <button className="btn btn-secondary">Sačuvaj kontakt</button>
          </div>
        </article>
      </section>
    );
  }