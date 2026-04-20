import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="container">
        <p className="eyebrow">RevealMe</p>

        <h1 className="title">
          Jedan link koji govori sve o tebi ili tvom biznisu.
        </h1>

        <p className="subtitle">
          Digitalni identitet koji je pregledan, topao i jednostavan.
          Svaka stranica je mali svet za sebe.
        </p>

        <div className="actions">
          <button className="btn btn-primary">Kreiraj profil</button>
          <button className="btn btn-secondary">Pogledaj primer</button>
        </div>
      </div>
    </div>
  );
}