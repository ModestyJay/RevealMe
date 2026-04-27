import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import ProfilePreview from "../components/ProfilePreview";
import { profiles } from "../data/profiles";

export default function ProfilePage() {
  const { slug } = useParams();

  const savedProfiles = JSON.parse(
    localStorage.getItem("revealmeProfiles") || "[]"
  );
  
  const allProfiles = [...profiles, ...savedProfiles];
  
  const profile = allProfiles.find((item) => item.slug === slug);

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
        email={profile.email}
        website={profile.website}
        image={profile.image}
        about={profile.about}
        services={profile.services}  
        images={profile.images}
        socials={profile.socials}      
      />
    </Layout>
  );
}