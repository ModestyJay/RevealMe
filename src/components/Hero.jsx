export default function Hero({ eyebrow, title, subtitle }) {
  return (
    <>
      <p className="eyebrow">{eyebrow}</p>

      <h1 className="title">{title}</h1>

      <p className="subtitle">{subtitle}</p>
    </>
  );
}