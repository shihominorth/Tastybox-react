import React from "react";

function Header() {
    return (
        <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-lights">
          <div class="container-fluid">
            <img src="../images/icon.png" alt="icon" class="icon" />
            <a class="navbar-brand" href="landing_page.html">TastyBox</a>
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
             {/* <!-- ms-autoは右よせ -->  */}
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="landing_page.html">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    >Discovery</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">Timeline</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Ingredients</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Ranking</a>
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
                    >MyProfile</a
                  >
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">Refrigerator</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Shoppinglist</a>
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
                    >Settings
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="landing_page.html">Logout</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header;