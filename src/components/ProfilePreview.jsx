import { useState } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Avatar from "./Avatar/Avatar";
import Button from "./Button/Button";
import { QRCodeSVG } from "qrcode.react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaViber } from "react-icons/fa";
import { formatPhoneForApps } from "../utils/formatPhone";
import { useRef } from "react";


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
  images = [],
  socials,
}) {
 
  const [showContactForm, setShowContactForm] = useState(false);

  const cleanPhone = phone?.replace(/\s+/g, "") || "";

  const appPhone = formatPhoneForApps(phone);

  const whatsappMessage = encodeURIComponent(
    `Zdravo ${name}, pronašao/la sam vaš profil na RevealMe i zanima me više informacija o vašim uslugama.`
  );

  const [activeIndex, setActiveIndex] = useState(0);

  const galleryRef = useRef(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleScroll = () => {
    const container = galleryRef.current;
    if (!container) return;
  
    const scrollLeft = container.scrollLeft;
    const width = container.clientWidth;
  
    const index = Math.round(scrollLeft / width);
    setActiveIndex(index);
  };

  const showPreviousImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };
  
  const showNextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const websiteUrl = website
    ? website.startsWith("http")
      ? website
      : `https://${website}`
    : "";

  const vCard = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL:${cleanPhone}
${email ? `EMAIL:${email}` : ""}
${websiteUrl ? `URL:${websiteUrl}` : ""}
${location ? `ADR:;;${location};;;;` : ""}
${description ? `NOTE:${description}` : ""}
END:VCARD
`.trim();

  const contactHref = `data:text/vcard;charset=utf-8,${encodeURIComponent(vCard)}`;

  const copyProfileLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert("Link profila je kopiran.");
    } catch (error) {
      alert("Nisam uspeo da kopiram link.");
    }
  };

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
        
        {email && (
            <Button
              variant="secondary"
              onClick={() => setShowContactForm(true)}
            >
              Pošalji e-mail
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

          <Button variant="secondary" onClick={copyProfileLink}>
            Kopiraj link
          </Button>
        </div>
      </article>

      {(socials?.instagram || socials?.facebook || appPhone) && (
        <article className="profile-extra-card">
          <h2 className="profile-section-heading">Kontakt preko aplikacija</h2>

          <div className="social-links">
            {socials?.instagram && (
              <a
                href={socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaInstagram className="social-icon" />
                Instagram
              </a>
            )}

            {socials?.facebook && (
              <a
                href={socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <FaFacebookF className="social-icon" />
                Facebook
              </a>
            )}

            {appPhone && (
              <a
              href={`https://wa.me/${appPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="social-link hide-on-mobile"
              >
                <FaWhatsapp className="social-icon" />
                WhatsApp
              </a>
            )}

            {appPhone && (
              <a
                href={`viber://chat?number=%2B${appPhone}`}
                className="social-link hide-on-mobile"
              >
                <FaViber className="social-icon" />
                Viber
              </a>
            )}
          </div>
        </article>
      )}

      {showContactForm && email && (
        <div
          className="modal-overlay"
          onClick={() => setShowContactForm(false)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <ContactForm
              profileName={name}
              profileEmail={email}
              onClose={() => setShowContactForm(false)}
            />
          </div>
        </div>
      )}

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

      {images.length > 0 && (
        <article className="profile-extra-card">
          <h2 className="profile-section-heading">Radovi</h2>

          <div
            className="gallery-grid"
            ref={galleryRef}
            onScroll={handleScroll}
          >
            {images.map((img, index) => (
              <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImageIndex(index)}
            >
              <img src={img} alt={`${name} rad ${index + 1}`} />
            </div>
            ))}
          </div>

          <div className="gallery-dots">
            {images.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
        </article>        
      )}

        <article className="profile-extra-card">
          <h2 className="profile-section-heading">Podeli profil</h2>

          <div className="qr-wrapper">
          <QRCodeSVG value={window.location.href} size={140} />
            <p className="qr-text">
              Skeniraj kod i otvori profil na telefonu
            </p>
          </div>
        </article>

        
        {selectedImageIndex !== null && (
            <div
              className="image-lightbox"
              onClick={() => setSelectedImageIndex(null)}
            >
              <button
                type="button"
                className="lightbox-arrow lightbox-arrow-left"
                onClick={showPreviousImage}
              >
                ‹
              </button>
          
              <div
                className="image-lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedImageIndex]}
                  alt={`${name} rad ${selectedImageIndex + 1}`}
                />
              </div>
          
              <button
                type="button"
                className="lightbox-arrow lightbox-arrow-right"
                onClick={showNextImage}
              >
                ›
              </button>
            </div>
          )}

          {appPhone && (
            <div className="sticky-contact-bar">
              <a href={`tel:${cleanPhone}`} className="sticky-contact-link">
                Pozovi
              </a>

              <a
                href={`https://wa.me/${appPhone}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="sticky-contact-link"
              >
                WhatsApp
              </a>

              <a
                href={`viber://chat?number=%2B${appPhone}`}
                className="sticky-contact-link"
              >
                Viber
              </a>
            </div>
          )}
    </section>
  );
}