
import background from "../images/background-img.png";
import TimelineScreenshot from "./TimelinneScreenshot";
import IngredientScreenshot from "./IngredientScreenshot";
import RankingScreenshot from "./RankingScreenshot";
import { useNavigate } from "react-router-dom";


const top_style = { backgroundImage: `url(${background})` };


function Landing_Page() {
  
  const navigate = useNavigate();
  const login = () => {
    navigate('/login'); // 画面遷移
  };
  
  return (
      <div>
        <main>
          <div id="top" style={top_style}>
            <div className="top-text">
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
              <div className="top-buttons">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg login-button"
                  onClick={login}
                //   onClick="location.href='../../login_page/login.html'"

                >
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-lg new-account-button"
                >
                  Create new account
                </button>
              </div>
            </div>
          </div>
          <div id="meals">
            <div className="meals-images">
              <div className="meals-image">
                <img
                  className="meals-main-image"
                  src="../images/food1.jpg"
                  alt=""
                  srcSet=""
                />
                <div className="explanation">
                  <img
                    className="number"
                    src="../images/number1.png"
                    alt="number"
                    srcSet=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    vitae molestie dolor. Donec vel pretium velit. Pellentesque
                    consectetur
                  </p>
                </div>
              </div>
  
              <div className="meals-image">
                <div className="explanation">
                  <img
                    className="number"
                    src="../images/number2.png"
                    alt="number"
                    srcSet=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    vitae molestie dolor. Donec vel pretium velit. Pellentesque
                    consectetur
                  </p>
                </div>
                <img
                  className="meals-main-image"
                  src="../images/food2.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <div className="meals-image">
                <img
                  className="meals-main-image"
                  src="../images/food3.jpg"
                  alt=""
                  srcSet=""
                />
                <div className="explanation">
                  <img
                    className="number"
                    src="../images/number3.png"
                    alt="number"
                    srcSet=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    vitae molestie dolor. Donec vel pretium velit. Pellentesque
                    consectetur
                  </p>
                </div>
              </div>
              <div className="meals-image">
                <div className="explanation">
                  <img
                    className="number"
                    src="../images/number4.png"
                    alt="number"
                    srcSet=""
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    vitae molestie dolor. Donec vel pretium velit. Pellentesque
                    consectetur
                  </p>
                </div>
                <img
                  className="meals-main-image"
                  src="../images/food4.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
            </div>
          </div>
          <div id="container">
            <div id="left"></div>
            <div id="center">
              <div className="functions-title">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
              </div>
              <div className="functions">
                <div className="function">
                  <h3>Timeline</h3>
                  <div className="function-content">
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
                <div className="function">
                  <h3>Recipe with your ingredients</h3>
                  <div className="function-content">
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
                <div className="function">
                <h3>Ranking</h3>
                <div className="function-content">
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
          <div className="service-start">
            <div className="service-start-content">
              <h3>Let's begin Tastybox!</h3>
              <br />
              <button
                type="button"
                className="btn btn-outline-primary btn-lg login-button"
                onClick={login}
                // onClick="location.href='../../login_page/login.html'"
              >
                Login
              </button>
              <button
                type="button"
                className="btn btn-outline-primary btn-lg new-account-button"
              >
                Create new account
              </button>
            </div>
          </div>
        </main>
        <footer>
          <div className="copyright">
            <p>Copyright&copy;Shihomi Kitajima</p>
          </div>
        </footer>
      </div>
    );
  }

  export default Landing_Page;