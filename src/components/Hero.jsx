export default function Hero({ title, subtitle, eyebrow }) {
    return (
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subtitle}</p>
      </div>
    );
  }