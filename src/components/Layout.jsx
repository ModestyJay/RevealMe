import Header from "./Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="page">
        <div className="container">{children}</div>
      </div>
    </>
  );
}