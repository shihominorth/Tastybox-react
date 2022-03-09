import React, { useState } from "react";
import background from "../images/background-img.png";
import TimelineScreenshot from "./TimelinneScreenshot";
import IngredientScreenshot from "./IngredientScreenshot";
import RankingScreenshot from "./RankingScreenshot";
import LoginPagePath from "../components/LoginPagePath";

const top_style = { backgroundImage: `url(${background})` };
// const loginBtnClicked = { "location.href= ${LoginPagePath}" };

function App() {
  return (
    <div>
      <main>
        <div id="top" style={top_style}>
          <div class="top-text">
            <h1>Tastybox</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae
              molestie dolor. Donec vel pretium velit. Pellentesque consectetur
              dictum urna et mattis. Mauris vel tempor tortor, id viverra ipsum.
              Nunc in molestie leo. Etiam fermentum, leo consequat posuere
              ultricies, felis ante placerat ligula, vitae sodales turpis sapien
              non lacus. Fusce vitae nunc quis elit malesuada sodales. Cras
              lorem lacus, tincidunt non aliquam quis, eleifend eget nisl.
              Aenean blandit tortor sit amet odio porttitor, id posuere felis
              laoreet. Nullam venenatis turpis eros. Mauris egestas luctus
              finibus. Donec semper varius fermentum.
            </p>
            <div class="top-buttons">
              <button
                type="button"
                class="btn btn-outline-primary btn-lg login-button"
                onclick="location.href='../../landing_page.html'"
              >
                Login
              </button>
              <button
                type="button"
                class="btn btn-outline-primary btn-lg new-account-button"
              >
                Create new account
              </button>
            </div>
          </div>
        </div>
        <div id="meals">
          <div class="meals-images">
            <div class="meals-image">
              <img
                class="meals-main-image"
                src="../images/food1.jpg"
                alt=""
                srcset=""
              />
              <div class="explanation">
                <img
                  class="number"
                  src="../images/number1.png"
                  alt="number"
                  srcset=""
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae molestie dolor. Donec vel pretium velit. Pellentesque
                  consectetur
                </p>
              </div>
            </div>

            <div class="meals-image">
              <div class="explanation">
                <img
                  class="number"
                  src="../images/number2.png"
                  alt="number"
                  srcset=""
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae molestie dolor. Donec vel pretium velit. Pellentesque
                  consectetur
                </p>
              </div>
              <img
                class="meals-main-image"
                src="../images/food2.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div class="meals-image">
              <img
                class="meals-main-image"
                src="../images/food3.jpg"
                alt=""
                srcset=""
              />
              <div class="explanation">
                <img
                  class="number"
                  src="../images/number3.png"
                  alt="number"
                  srcset=""
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae molestie dolor. Donec vel pretium velit. Pellentesque
                  consectetur
                </p>
              </div>
            </div>
            <div class="meals-image">
              <div class="explanation">
                <img
                  class="number"
                  src="../images/number4.png"
                  alt="number"
                  srcset=""
                />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae molestie dolor. Donec vel pretium velit. Pellentesque
                  consectetur
                </p>
              </div>
              <img
                class="meals-main-image"
                src="../images/food4.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
        <div id="container">
          <div id="left"></div>
          <div id="center">
            <div class="functions-title">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            <div class="functions">
              <div class="function">
                <h3>Timeline</h3>
                <div class="function-content">
                  <TimelineScreenshot />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    vitae molestie dolor. Donec vel pretium velit. Pellentesque
                    consectetur dictum urna et mattis. Mauris vel tempor tortor,
                    id viverra ipsum. Nunc in molestie leo. Etiam fermentum, leo
                    consequat posuere ultricies, felis ante placerat ligula,
                    vitae sodales turpis sapien non lacus. Fusce vitae nunc quis
                    elit malesuada sodales. Cras lorem lacus, tinzdunt non
                    aliquam quis, eleifend eget nisl. Aenean blandit tortor sit
                    amet odio porttitor, id posuere felis laoreet. Nullam
                    venenatis turpis eros. Mauris egestas luctus finibus. Donec
                    semper varius fermentum.
                  </p>
                </div>
              </div>
              <div class="function">
                <h3>Recipe with your ingredients</h3>
                <div class="function-content">
                <IngredientScreenshot />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae molestie dolor. Donec vel pretium velit. Pellentesque
                  consectetur dictum urna et mattis. Mauris vel tempor tortor,
                  id viverra ipsum. Nunc in molestie leo. Etiam fermentum, leo
                  consequat posuere ultricies, felis ante placerat ligula, vitae
                  sodales turpis sapien non lacus. Fusce vitae nunc quis elit
                  malesuada sodales. Cras lorem lacus, tincidunt non aliquam
                  quis, eleifend eget nisl. Aenean blandit tortor sit amet odio
                  porttitor, id posuere felis laoreet. Nullam venenatis turpis
                  eros. Mauris egestas luctus finibus. Donec semper varius
                  fermentum.
                </p>
                </div>
              </div>
              <div class="function">
              <h3>Ranking</h3>
              <div class="function-content">
               <RankingScreenshot />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  vitae molestie dolor. Donec vel pretium velit. Pellentesque
                  consectetur dictum urna et mattis. Mauris vel tempor tortor,
                  id viverra ipsum. Nunc in molestie leo. Etiam fermentum, leo
                  consequat posuere ultricies, felis ante placerat ligula, vitae
                  sodales turpis sapien non lacus. Fusce vitae nunc quis elit
                  malesuada sodales. Cras lorem lacus, tincidunt non aliquam
                  quis, eleifend eget nisl. Aenean blandit tortor sit amet odio
                  porttitor, id posuere felis laoreet. Nullam venenatis turpis
                  eros. Mauris egestas luctus finibus. Donec semper varius
                  fermentum.
                </p>
                </div>
              </div>
            </div>
          </div>
          <div id="right"></div>
        </div>
        <div class="service-start">
          <div class="service-start-content">
            <h3>Let's begin Tastybox!</h3>
            <br />
            <button
              type="button"
              class="btn btn-outline-primary btn-lg login-button"
              onclick="location.href='home.html'"
            >
              Login
            </button>
            <button
              type="button"
              class="btn btn-outline-primary btn-lg new-account-button"
            >
              Create new account
            </button>
          </div>
        </div>
      </main>
      <footer>
        <div class="copyright">
          <p>Copyright&copy;Shihomi Kitajima</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
