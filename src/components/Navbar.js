import './Navbar.css';
function Navbar(prop) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Museos de arte moderno{' '}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" onClick={prop.onHome}>
                Museos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Artistas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Movimientos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
