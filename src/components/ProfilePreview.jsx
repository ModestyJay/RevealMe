import Avatar from "./Avatar/Avatar";
import Button from "./Button/Button";

export default function ProfilePreview({
  name,
  category,
  description,
  location,
  phone,
  email,
  website,
  image,
  about,
  services = [],
}) {
  const cleanPhone = phone?.replace(/\s+/g, "") || "";

  const websiteUrl = website?.startsWith("http")
    ? website
    : `https://${website}`;

  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${cleanPhone}
EMAIL:${email || ""}
URL:${websiteUrl || ""}
ADR:;;${location || ""};;;;
NOTE:${description || ""}
END:VCARD
`.trim();

  const contactHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`;

  return (
    <section className="profile-preview">
      <article className="profile-card profile-card-main">
        <div className="profile-top profile-top-centered">
          <Avatar name={name} category={category} image={image} />

          <div className="profile-headings">
            <p className="profile-category">{category}</p>
            <h1 className="profile-name">{name}</h1>
            <p className="profile-location">{location}</p>
          </div>
        </div>

        <p className="profile-description profile-description-centered">
          {description}
        </p>

        <div className="profile-actions profile-actions-grid">
        <Button href={`tel:${phone}`} fullWidth>
          Pozovi
        </Button>

          {email && (
            <Button href={`mailto:${email}`} variant="secondary">
              Pošalji mail
            </Button>
          )}

          {website && (
            <Button href={websiteUrl} target="_blank" rel="noreferrer">
              Website
            </Button>
          )}

          <a
            href={contactHref}
            download={`${name.replace(/\s+/g, "-").toLowerCase()}.vcf`}
            className="btn btn-secondary"
          >
            Dodaj kontakt
          </a>
        </div>
      </article>

      {about && (
        <article className="profile-extra-card">
          <h2 className="profile-section-heading">O nama</h2>
          <p className="profile-extra-text">{about}</p>
        </article>
      )}

      {services.length > 0 && (
        <article className="profile-extra-card">
          <h2 className="profile-section-heading">Usluge</h2>
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