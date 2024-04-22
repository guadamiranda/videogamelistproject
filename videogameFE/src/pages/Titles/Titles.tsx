import AllGamesSection from "./components/AllGamesSection/AllGamesSection";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import NavbarImg from "../../components/NavbarImg/NavbarImg";
import "./titles.css";

const Titles = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-3">
      <NavbarImg />
      <SectionTitle title="Todos los Títulos" />
      <AllGamesSection />
    </div>
  );
};

export default Titles;
