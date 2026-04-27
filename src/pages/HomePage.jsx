import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Actions from "../components/Actions";
import HowItWorks from "../components/HowItWorks";
import Features from "../components/Features";
import RevealOnScroll from "../components/RevealOnScroll";
import ProfileSearch from "../components/ProfileSearch";

const howItWorksSteps = [
  {
    number: "01",
    title: "Kreiraj profil",
    text: "Dodaj osnovne informacije, usluge, kontakt i ono po čemu se tvoj biznis pamti.",
  },
  {
    number: "02",
    title: "Podeli link",
    text: "Stavi svoj RevealMe link ili QR kod na vizitkartu, vozilo, profil ili ambalažu.",
  },
  {
    number: "03",
    title: "Ostavi utisak",
    text: "Klijent na jednom mestu vidi ko si, čime se baviš i kako može odmah da te kontaktira.",
  },
];

const featureItems = [
  {
    title: "Lično i autentično predstavljanje",
    text: "Pokaži ko si, čime se baviš i po čemu se razlikuješ, na jednostavan i prirodan način.",
  },
  {
    title: "Pregledan i elegantan prikaz",
    text: "Sve informacije su organizovane tako da posetilac brzo razume tvoju priču, usluge i kontakt podatke.",
  },
  {
    title: "Lakše ostavljaš utisak",
    text: "Jedan link može da bude tvoja digitalna vizitkarta, mali portfolio i mesto za prvi dobar utisak.",
  },
];

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
        primaryHref="/registracija"
        secondaryText="Pogledaj primer"
        secondaryHref="/profil/marko-keramika"
      />

      <RevealOnScroll>
        <ProfileSearch />
      </RevealOnScroll>

      <RevealOnScroll>
        <HowItWorks
          label="Kako radi"
          title="Tri jednostavna koraka do digitalnog identiteta"
          steps={howItWorksSteps}
        />
      </RevealOnScroll>

      <RevealOnScroll>
        <Features
          eyebrow="Prednosti"
          title="Sve važno o tebi na jednom mestu"
          intro="RevealMe ti pomaže da se predstaviš jasno, lepo i pregledno — bez komplikacija i bez viška buke."
          items={featureItems}
        />
      </RevealOnScroll>
    </Layout>
  );
}