import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProfilePreview from "../components/ProfilePreview";

const profiles = {
  "marko-keramika": {
    name: "Marko Keramika",
    category: "Keramičar",
    description:
      "Precizna ugradnja pločica, kupatila i kuhinja, uz jasan kontakt i pregled radova na jednom mestu.",
    location: "Beograd",
    phone: "+381 64 123 4567",
  },
  "ana-beauty-studio": {
    name: "Ana Beauty Studio",
    category: "Kozmetički salon",
    description:
      "Nega lica, tretmani i profesionalan pristup u toplom, elegantnom prostoru.",
    location: "Novi Sad",
    phone: "+381 63 222 333",
  },
  "petar-elektro": {
    name: "Petar Elektro",
    category: "Električar",
    description:
      "Instalacije, popravke i intervencije za stanove, kuće i poslovne prostore.",
    location: "Niš",
    phone: "+381 65 444 555",
  },
};

export default function ProfilePage() {
  const { slug } = useParams();
  const profile = profiles[slug];

  if (!profile) {
    return (
      <Layout>
        <section className="profile-preview">
          <p className="section-label">Profil</p>
          <h2 className="section-title">Profil nije pronađen</h2>
          <p className="profile-description">
            Izgleda da za ovu adresu još ne postoji profil.
          </p>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProfilePreview
        name={profile.name}
        category={profile.category}
        description={profile.description}
        location={profile.location}
        phone={profile.phone}
      />
    </Layout>
  );
}