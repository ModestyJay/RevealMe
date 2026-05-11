import { useState } from "react";
import Layout from "../components/Layout";

export default function AdminRequestsPage() {
  const [requests, setRequests] = useState(() =>
    JSON.parse(localStorage.getItem("revealmeRequests") || "[]")
  );
  const [copiedId, setCopiedId] = useState(null);

  const handleClearAll = () => {
    localStorage.removeItem("revealmeRequests");
    setRequests([]);
  };

  const handleDelete = (id) => {
    const updated = requests.filter((r) => r.id !== id);
    localStorage.setItem("revealmeRequests", JSON.stringify(updated));
    setRequests(updated);
  };

  const handleStatusChange = (id, status) => {
    const updated = requests.map((r) =>
      r.id === id ? { ...r, status } : r
    );
    localStorage.setItem("revealmeRequests", JSON.stringify(updated));
    setRequests(updated);
  };

  const copyEmail = (id, email) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
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
              <span className="admin-count">{requests.length} zahteva</span>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClearAll}
              >
                Obriši sve
              </button>
            </div>

            <div className="admin-request-list">
              {requests.map((request) => (
                <article key={request.id} className="admin-request-card">
                  
                  <div className="admin-card-header">
                    <h2>{request.name}</h2>
                    <select
                      className="admin-status-select"
                      value={request.status || "novo"}
                      onChange={(e) => handleStatusChange(request.id, e.target.value)}
                    >
                      <option value="novo">🆕 Novo</option>
                      <option value="u-obradi">⏳ U obradi</option>
                      <option value="zavrseno">✅ Završeno</option>
                    </select>
                  </div>

                  <div className="admin-card-fields">
                    <p><strong>Kategorija:</strong> {request.category}</p>
                    <p><strong>Lokacija:</strong> {request.location}</p>
                    <p><strong>Telefon:</strong> {request.phone}</p>
                    <p><strong>E-mail:</strong> {request.email}</p>
                    {request.website && <p><strong>Website:</strong> {request.website}</p>}
                    {request.description && <p><strong>Opis:</strong> {request.description}</p>}
                  </div>

                  <div className="admin-card-actions">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => copyEmail(request.id, request.email)}
                    >
                      {copiedId === request.id ? "✓ Kopirano!" : "Kopiraj email"}
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(request.id)}
                    >
                      Obriši
                    </button>
                  </div>

                </article>
              ))}
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}