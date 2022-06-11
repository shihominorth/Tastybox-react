import React from "react";

function Login() {
  return (
    <div className="contents">
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-lights">
          <div className="container-fluid">
            <img src="../images/icon.png" alt="icon" className="icon" />
            <a className="navbar-brand" href="landing_page.html">
              TastyBox
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navbar-right" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {/* <!-- ms-autoは右よせ --> */}
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="landing_page.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Discovery
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Timeline
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Ingredients
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Ranking
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MyProfile
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        Refrigerator
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Shoppinglist
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="landing_page.html">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="left-area">
          <div className="left-contents">
            <div className="welcome-text">
              <h1>Welcome to Tastybox!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                vitae molestie dolor. Donec vel pretium velit. Pellentesque
                consectetur dictum urna et mattis. Mauris vel tempor tortor, id
                viverra ipsum. Nunc in molestie leo. Etiam fermentum, leo
                consequat posuere ultricies, felis ante placerat ligula, vitae
                sodales turpis sapien non lacus. Fusce vitae nunc quis elit
                malesuada sodales. Cras lorem lacus, tincidunt non aliquam quis,
                eleifend eget nisl. Aenean blandit tortor sit amet odio
                porttitor, id posuere felis laoreet. Nullam venenatis turpis
                eros. Mauris egestas luctus finibus. Donec semper varius
                fermentum.
              </p>
              <div className="sign_up_contents">
                <a href="#">メールアドレスでアカウント登録</a>
              </div>
            </div>
          </div>
        </div>

        <div className="login-area">
          <div className="login-contents">
            <form className="login-form" action="" method="post">
              <div className="form-group form-components">
                <label for="exampleDropdownFormEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className="form-control"
                  placeholder="email@example.com"
                />
              </div>
              <div className="form-group form-components">
                <label
                  for="exampleDropdownFormPassword1"
                  placeholder="Password"
                >
                  Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  id=""
                  className="password-textfield"
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dropdownCheck"
                />
                <label
                  className="form-check-label form-components"
                  for="dropdownCheck"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                className="form-components btn btn-primary"
                onClick="location.href='home.html'"
              >
                Login
              </button>
            </form>

            <div className="login-with-other-plattform-account">
              <button className="login-button btn btn-primary">Google</button>
              <br />
              <button className="login-button btn btn-primary">Facebook</button>
              <br />
              <button className="login-button btn btn-primary">Apple</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
