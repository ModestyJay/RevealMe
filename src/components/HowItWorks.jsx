import StepCard from "./StepCard";

const steps = [
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

export default function HowItWorks() {
  return (    
    <section className="how-it-works">
       <p className="section-label">Kako radi</p>
      <h2 className="section-title">Tri jednostavna koraka do digitalnog identiteta</h2>

      <div className="steps-grid">
        {steps.map((step) => (
          <StepCard
            key={step.number}
            number={step.number}
            title={step.title}
            text={step.text}
          />
        ))}
      </div>
    </section>
  );
}