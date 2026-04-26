import { useState } from "react";
import Button from "../Button/Button";

export default function ContactForm({ profileName, profileEmail, onClose }) {
  const [form, setForm] = useState({
    senderName: "",
    senderEmail: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Poruka za backend:", {
      to: profileEmail,
      profileName,
      ...form,
    });

    setStatus("Poruka je spremna za slanje. Backend ćemo povezati kasnije.");
    setForm({
      senderName: "",
      senderEmail: "",
      message: "",
    });
  }

  return (
    <div className="contact-form-box">
      <div className="contact-form-header">
        <div>
          <h2 className="profile-section-heading">Pošalji poruku</h2>
          <p className="contact-form-subtitle">
            Poruka će biti poslata profilu: <strong>{profileName}</strong>
          </p>
        </div>

        <button type="button" className="contact-close-btn" onClick={onClose}>
          ×
        </button>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="senderName"
          placeholder="Vaše ime"
          value={form.senderName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="senderEmail"
          placeholder="Vaš e-mail"
          value={form.senderEmail}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Vaša poruka..."
          value={form.message}
          onChange={handleChange}
          required
        />

        <Button variant="primary">Pošalji poruku</Button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </div>
  );
}