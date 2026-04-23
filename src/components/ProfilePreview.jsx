export default function ProfilePreview({
  name,
  category,
  description,
  location,
  phone,
  email,
  image,
  about,
  services = [],
}) {
  return (
    <section className="profile-preview">
      <p className="section-label">Profil</p>
      <h2 className="section-title">Digitalna lična karta</h2>

      <article className="profile-card">
        <div className="profile-top">
          <div className="avatar">
            {image ? <img src={image} alt={name} /> : name.charAt(0)}
          </div>

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

          {email && (
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">{email}</span>
            </div>
          )}
        </div>

        <div className="profile-actions">
          <a
            href={`tel:${phone.replace(/\s+/g, "")}`}
            className="btn btn-primary"
          >
            Pozovi
          </a>

          {email && (
            <a href={`mailto:${email}`} className="btn btn-secondary">
              Pošalji mail
            </a>
          )}
        </div>
      </article>

      {about && (
        <article className="profile-extra-card">
          <h3 className="profile-section-heading">O meni</h3>
          <p className="profile-extra-text">{about}</p>
        </article>
      )}

      {services.length > 0 && (
        <article className="profile-extra-card">
          <h3 className="profile-section-heading">Usluge</h3>
          <ul className="services-list">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </article>
      )}
    </section>
  );
}