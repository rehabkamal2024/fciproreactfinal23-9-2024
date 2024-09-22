

const Admin = () => {
  return (
    <>
    {/*Main Navigation*/}
    <header>
      {/* Sidebar */}
      <nav
        id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white"
      >
        <div className="position-sticky">
          <div className="list-group list-group-flush mx-3 mt-4">
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw me-3" />
              <span>Main dashboard</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple active"
            >
              <i className="fas fa-chart-area fa-fw me-3" />
              <span>Webiste traffic</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-lock fa-fw me-3" />
              <span>Password</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-line fa-fw me-3" />
              <span>Analytics</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-pie fa-fw me-3" />
              <span>SEO</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-chart-bar fa-fw me-3" />
              <span>Orders</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-globe fa-fw me-3" />
              <span>International</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-building fa-fw me-3" />
              <span>Partners</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-calendar fa-fw me-3" />
              <span>Calendar</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-users fa-fw me-3" />
              <span>Users</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action py-2 ripple"
            >
              <i className="fas fa-money-bill fa-fw me-3" />
              <span>Sales</span>
            </a>
          </div>
        </div>
      </nav>
      {/* Sidebar */}
      {/* Navbar */}
      <nav
        id="main-navbar"
        className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
      >
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            data-mdb-button-init=""
            className="navbar-toggler"
            type="button"
            data-mdb-collapse-init=""
            data-mdb-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Brand */}
          <a className="navbar-brand" href="#">
            <img
              src="img/زاد-removebg-preview.png"
              height={70}
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* Search form */}
          <p></p>
          {/* Right links */}
          <ul className="navbar-nav ms-auto d-flex flex-row">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>مرحبا بك : مروة احمد قاسم</strong>{" "}
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>{" "}
          </ul>
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </header>
    {/*Main Navigation*/}
    {/*Main layout*/}
    <main style={{ marginTop: 58 }}>
      <div className="container pt-4" />
    </main>
    {/*Main layout*/}
  </>
  
  );
}


export default Admin;
