import StepCard from "./StepCard";

export default function HowItWorks({ label, title, steps = [] }) {
  return (
    <section className="how-it-works">
      <p className="section-label">{label}</p>
      <h2 className="section-title">{title}</h2>

      <div className="steps-grid">
      {steps.map((step, index) => (
        <div
          key={step.number}
          className="reveal-item"
          style={{ transitionDelay: `${index * 0.15}s` }}
        >
          <StepCard
            number={step.number}
            title={step.title}
            text={step.text}
          />
        </div>
      ))}
      </div>
    </section>
  );
}