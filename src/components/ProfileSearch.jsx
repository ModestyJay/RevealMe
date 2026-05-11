import { useState } from "react";
import ProfileSearchCard from "./ProfileSearchCard";
import { profiles } from "../data/profiles";

export default function ProfileSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showResults, setShowResults] = useState(false);

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const savedProfiles = JSON.parse(
    localStorage.getItem("revealmeProfiles") || "[]"
  );

  const allProfiles = [...profiles, ...savedProfiles];

  const categories = [...new Set(allProfiles.map((profile) => profile.category))]
    .sort();

  const locations = [...new Set(allProfiles.map((profile) => profile.location))]
    .sort();

  const hasSearch =
    normalizedSearch !== "" ||
    selectedCategory !== "" ||
    selectedLocation !== "";

  const filteredProfiles = allProfiles.filter((profile) => {
    const searchableText = `
      ${profile.name}
      ${profile.category}
      ${profile.location}
      ${profile.description}
    `.toLowerCase();

    const matchesText =
      normalizedSearch === "" || searchableText.includes(normalizedSearch);

    const matchesCategory =
      selectedCategory === "" || profile.category === selectedCategory;

    const matchesLocation =
      selectedLocation === "" || profile.location === selectedLocation;

    return matchesText && matchesCategory && matchesLocation;
  });

  function handleClearSearch() {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedLocation("");
    setShowResults(false);
  }

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
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(false);
          }}
          className="search-input"
        />

        <select
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            setShowResults(false);
          }}
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
          onChange={(e) => {
            setSelectedLocation(e.target.value);
            setShowResults(false);
          }}
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
        <div className="search-actions">
          <button
            type="button"
            className="show-results-btn"
            onClick={() => setShowResults(true)}
          >
            Prikaži rezultate ({filteredProfiles.length})
          </button>

          <button
            type="button"
            className="clear-search-btn"
            onClick={handleClearSearch}
          >
            Očisti pretragu
          </button>
        </div>
      )}

      {hasSearch && showResults && (
        <div className="search-results-panel">
          <div className="results-panel-header">
            <div>
              <p className="section-label">Rezultati</p>
              <h3>Pronađeni profili</h3>
            </div>

            <button
              type="button"
              className="edit-search-btn"
              onClick={() => setShowResults(false)}
            >
              Izmeni pretragu
            </button>
          </div>

          <div className="search-results">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <ProfileSearchCard
                  key={profile.id || profile.slug}
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
        </div>
      )}
    </section>
  );
}