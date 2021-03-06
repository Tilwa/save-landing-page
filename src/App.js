import "./app.css";
import LandingTop from "./landingTop/LandingTop";
import Footer from "./components/footer/Footer";
import Cards from "./components/cards/Cards";
import Topbar from "./components/topbar/Topbar";

function App() {
  function URL() {
    window.open("https://fasbazar.com/", "_self");
  }

  const callup = () => {
    const scrollUp = document.querySelector("#scroll-up");

    scrollUp.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    });
  };

  return (
    <div className="my-app">
      <LandingTop />
      <Topbar />
      <Cards />
      <div className="next-btn">
        <button
          className="button1"
          style={{ verticalAlign: "middle" }}
          onClick={URL}
        >
          <span>Next Page</span>
        </button>
      </div>
      <i class="scroll-up" id="scroll-up">
        <img
          src={require("./assets/arrowup.png")}
          class="socicon up-arrow"
          alt="scroll-up"
          className="upgo"
          onClick={callup}
        />
      </i>

      <Footer />
    </div>
  );
}

export default App;
