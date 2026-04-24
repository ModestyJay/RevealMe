import { useState } from "react";
import ProfileSearchCard from "./ProfileSearchCard";
import { profiles } from "../data/profiles";

export default function ProfileSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const categories = [...new Set(profiles.map((profile) => profile.category))];
  const locations = [...new Set(profiles.map((profile) => profile.location))];

  const hasSearch =
    searchTerm.trim() !== "" ||
    selectedCategory !== "" ||
    selectedLocation !== "";

  const filteredProfiles = profiles.filter((profile) => {
    const matchesName = profile.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || profile.category === selectedCategory;

    const matchesLocation =
      selectedLocation === "" || profile.location === selectedLocation;

    return matchesName && matchesCategory && matchesLocation;
  });

  return (
    <section className="profile-search">
      <p className="section-label">Pretraga</p>
      <h2 className="section-title">Pronađi profil</h2>
      <p className="search-intro">
        Pretraži profile po nazivu, kategoriji ili lokaciji.
      </p>

      <div className="search-controls">
        <input
          type="text"
          placeholder="Pretraži po nazivu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="search-select"
        >
          <option value="">Sve kategorije</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="search-select"
        >
          <option value="">Sve lokacije</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>

      {!hasSearch && (
        <p className="search-hint">
            🔍 Unesi naziv, kategoriju ili lokaciju da pronađeš profil.
        </p>
        )}
      {hasSearch && (
    <div className="search-results">
        {filteredProfiles.length > 0 ? (
        filteredProfiles.map((profile) => (
            <ProfileSearchCard
            key={profile.id}
            slug={profile.slug}
            name={profile.name}
            category={profile.category}
            location={profile.location}
            description={profile.description}
            phone={profile.phone}
            image={profile.image}
            />
        ))
        ) : (
        <p className="no-results">Nema rezultata za zadate kriterijume.</p>
        )}
    </div>
)}
    </section>
  );
}