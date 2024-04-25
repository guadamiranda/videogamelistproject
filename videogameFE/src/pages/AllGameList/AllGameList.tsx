import NavbarImg from "../../components/NavbarImg/NavbarImg";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import { useLocation } from "react-router-dom";
import "./allGameList.css";
import React from "react";

interface AllGameModel {
    stateGame: string
}

const AllGameList:React.FC<AllGameModel> = () => {
    let { state } = useLocation();
  const stateGame = state.stateGame

  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-3">
      <NavbarImg />
      <SectionTitle title={stateGame} />
    </div>
  );
};

export default AllGameList;
