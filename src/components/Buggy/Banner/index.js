export default function Banner() {
  return (
    <section className="banner-slider">
      <nav aria-label="breadcrumb" className="breadcrumb-container">
        <div className="container">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="/tour/">Tours</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Buggy
            </li>
          </ol>
        </div>
      </nav>
    </section>
  );
}
