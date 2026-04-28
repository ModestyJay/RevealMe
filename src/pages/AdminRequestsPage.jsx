import { useState } from "react";
import Layout from "../components/Layout";

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState(() =>
    JSON.parse(localStorage.getItem("revealmeRequests") || "[]")
  );

  const [copiedId, setCopiedId] = useState(null);
  
  const handleClearRequests = () => {
    localStorage.removeItem("revealmeRequests");
    setRequests([]);
  };

  return (
    <Layout>
      <section className="admin-requests">
        <p className="section-label">Admin</p>
        <h1 className="section-title">Zahtevi za RevealMe profile</h1>

        {requests.length === 0 ? (
          <p className="admin-empty">Trenutno nema poslatih zahteva.</p>
        ) : (
          <>
            <div className="admin-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClearRequests}
              >
                Obriši sve zahteve
              </button>
            </div>

            <div className="admin-request-list">
              {requests.map((request) => (
                <article key={request.id} className="admin-request-card">
                  <h2>{request.name}</h2>
                  <p><strong>Kategorija:</strong> {request.category}</p>
                  <p><strong>Lokacija:</strong> {request.location}</p>
                  <p><strong>Telefon:</strong> {request.phone}</p>
                  <p><strong>E-mail:</strong> {request.email}</p>
                  <p><strong>Website:</strong> {request.website}</p>
                  <p><strong>Opis:</strong> {request.description}</p>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                        navigator.clipboard.writeText(request.email);
                        setCopiedId(request.id);
                        setTimeout(() => setCopiedId(null), 2000);
                    }}
                    >
                    {copiedId === request.id ? "✓ Kopirano!" : "Kopiraj email"}
                   </button>
                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}