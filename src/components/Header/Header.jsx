import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          RevealMe
        </Link>

        {/* HAMBURGER */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* NAV */}
        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Početna
          </Link>

          <Link
            to="/registracija"
            className="nav-link nav-cta"
            onClick={() => setIsOpen(false)}
          >
            Kreiraj profil
          </Link>

          <Link
            to="/admin/zahtevi"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Admin
          </Link>
        </nav>
      </div>
    </header>
  );
}