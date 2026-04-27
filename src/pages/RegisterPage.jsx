import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const categories = [
    "Keramičar",
    "Fotograf",
    "Frizer",
    "Vodoinstalater",
    "Električar",
    "Kozmetički salon",
    "Cvećara",
    "Poslastičarnica",
    "Restoran",
    "Apartman",
    "IT",
  ];

const handleChange = (e) => {
  const { name, value } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const createSlug = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[čć]/g, "c")
    .replace(/š/g, "s")
    .replace(/đ/g, "dj")
    .replace(/ž/g, "z")
    .replace(/[^a-z0-9-]/g, "");

const handleSubmit = (e) => {
  e.preventDefault();

  const newProfile = {
    id: Date.now(),
    slug: createSlug(form.name),
    name: form.name,
    category: form.category,
    location: form.location,
    phone: form.phone,
    email: form.email,
    website: form.website,
    description: form.description,
    about: "",
    services: [],
    images: [],
    socials: {
      instagram: "",
      facebook: "",
    },
  };

  const savedProfiles = JSON.parse(
    localStorage.getItem("revealmeProfiles") || "[]"
  );

  localStorage.setItem(
    "revealmeProfiles",
    JSON.stringify([...savedProfiles, newProfile])
  );

  navigate(`/profil/${newProfile.slug}`);
};

export default function RegisterPage() {
    const navigate = useNavigate();
  
    const [form, setForm] = useState({
      name: "",
      category: "",
      location: "",
      phone: "",
      email: "",
      website: "",
      description: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newProfile = {
        id: Date.now(),
        slug: createSlug(form.name),
        name: form.name,
        category: form.category,
        location: form.location,
        phone: form.phone,
        email: form.email,
        website: form.website,
        description: form.description,
        about: "",
        services: [],
        images: [],
        socials: {
          instagram: "",
          facebook: "",
        },
      };
  
      const savedProfiles = JSON.parse(
        localStorage.getItem("revealmeProfiles") || "[]"
      );
  
      localStorage.setItem(
        "revealmeProfiles",
        JSON.stringify([...savedProfiles, newProfile])
      );
  
      navigate(`/profil/${newProfile.slug}`);
    };
  
    return (
    <Layout>
      <section className="register-page">
        <p className="section-label">Registracija</p>
        <h1 className="section-title">Kreiraj svoj RevealMe profil</h1>
        <p className="register-intro">
          Unesi osnovne podatke o svom biznisu. Ovo je prvi korak ka tvojoj digitalnoj ličnoj karti.
        </p>

        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>
              Naziv profila
              <input name="name" type="text" placeholder="npr. Studio Luna" 
              value={form.name} onChange={handleChange}/>
            </label>

            <label>
             Kategorija
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                >
                    <option value="">Izaberi kategoriju</option>
                    {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                    ))}
                </select>
            </label>

            <label>
              Lokacija
              <input
                name="location"
                type="text"
                placeholder="npr. Novi Sad"
                value={form.location}
                onChange={handleChange}
                />
            </label>

            <label>
              Telefon
              <input  name="phone" type="tel" placeholder="npr. 062 222 111" 
              value={form.phone}
              onChange={handleChange}/>
            </label>

            <label>
              E-mail
              <input  name="email" type="email" placeholder="npr. studio@example.com" 
              value={form.email}
              onChange={handleChange}/>
            </label>

            <label>
              Website
              <input  name="website" type="text" placeholder="npr. www.mojbiznis.rs" 
              value={form.website}
              onChange={handleChange}/>
            </label>
          </div>

          <label>
            Kratak opis
            <textarea name="description" placeholder="U nekoliko rečenica predstavi svoj biznis..." 
            value={form.description}
            onChange={handleChange}/>
          </label>

          <button type="submit" className="btn btn-primary">
            Sačuvaj profil
          </button>
        </form>
      </section>
    </Layout>
  );
}