import Layout from "../components/Layout";
import { Link } from "react-router-dom";

export default function RequestSentPage() {
  return (
    <Layout>
      <section className="request-sent">
        <p className="section-label">Uspešno poslato</p>

        <h1 className="section-title">
          Tvoj zahtev je uspešno poslat ✨
        </h1>

        <p className="request-text">
          Hvala ti na interesovanju za RevealMe profil.
          <br /><br />
          Javićemo ti se uskoro kako bismo zajedno završili kreiranje
          tvoje digitalne lične karte.
        </p>

        <Link to="/" className="btn btn-primary btn-link request-home-btn">
            Vrati se na početnu
        </Link>
      </section>
    </Layout>
  );
}