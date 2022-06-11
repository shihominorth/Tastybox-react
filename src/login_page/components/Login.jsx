import React from "react";

function Login() {
  return (
    <div class="contents">
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-lights">
          <div class="container-fluid">
            <img src="../images/icon.png" alt="icon" class="icon" />
            <a class="navbar-brand" href="landing_page.html">
              TastyBox
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse navbar-right" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                {/* <!-- ms-autoは右よせ --> */}
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="landing_page.html"
                  >
                    Home
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Discovery
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Timeline
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Ingredients
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Ranking
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MyProfile
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">
                        Refrigerator
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Shoppinglist
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="landing_page.html">
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
        <div class="left-area">
          <div class="left-contents">
            <div class="welcome-text">
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
              <div class="sign_up_contents">
                <a href="#">メールアドレスでアカウント登録</a>
              </div>
            </div>
          </div>
        </div>

        <div class="login-area">
          <div class="login-contents">
            <form class="login-form" action="" method="post">
              <div class="form-group form-components">
                <label for="exampleDropdownFormEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  class="form-control"
                  placeholder="email@example.com"
                />
              </div>
              <div class="form-group form-components">
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
                  class="password-textfield"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="dropdownCheck"
                />
                <label
                  class="form-check-label form-components"
                  for="dropdownCheck"
                >
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                class="form-components btn btn-primary"
                onclick="location.href='home.html'"
              >
                Login
              </button>
            </form>

            <div class="login-with-other-plattform-account">
              <button class="login-button btn btn-primary">Google</button>
              <br />
              <button class="login-button btn btn-primary">Facebook</button>
              <br />
              <button class="login-button btn btn-primary">Apple</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
