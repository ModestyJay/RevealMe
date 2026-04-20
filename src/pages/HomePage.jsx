import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Actions from "../components/Actions";
import HowItWorks from "../components/HowItWorks";

export default function HomePage() {
  return (
    <Layout>
      <Hero
        eyebrow="RevealMe"
        title="Jedan link koji govori sve o tebi ili tvom biznisu."
        subtitle="Digitalni identitet koji je pregledan, topao i jednostavan. Svaka stranica je mali svet za sebe."
      />

      <Actions
        primaryText="Kreiraj profil"
        secondaryText="Pogledaj primer"
      />

      <HowItWorks />
    </Layout>
  );
}