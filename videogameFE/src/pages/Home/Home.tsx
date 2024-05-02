import GameCardSection from "./components/gameCardsSection/gameCardsSection";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Welcome from "./components/welcome/Welcome";
import "./home.css";

const MainHome = () => {
  return (
    <div className="mainHome d-flex justify-content-center flex-column align-items-center ">
      <div className="mainHome__titleContainer">
        <Welcome />
      </div>
      <div className="mainHome__someTitleContainer d-flex justify-content-center align-items-center">
        <SectionTitle title="Algunos Títulos" />
      </div>
      <div className="mainHome__recomendedTitlesContainer d-flex justify-content-center">
        <GameCardSection />
      </div>
    </div>
  );
};

export default MainHome;
