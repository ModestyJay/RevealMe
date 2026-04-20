export default function StepCard({ number, title, text }) {
    return (
      <article className="step-card">
        <p className="step-number">{number}</p>
        <h3 className="step-title">{title}</h3>
        <p className="step-text">{text}</p>
      </article>
    );
  }