export default function Features({ eyebrow, title, intro, items }) {
    return (
      <section className="features">
        <div className="features-header">
          <p className="features-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          <p className="features-intro">{intro}</p>
        </div>
  
        <div className="features-grid">
        {items.map((item, index) => (
            <div
                key={index}
                className="reveal-item"
                style={{ transitionDelay: `${index * 0.15}s` }}
            >
                <article className="feature-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                </article>
            </div>
        ))}
        </div>
      </section>
    );
  }