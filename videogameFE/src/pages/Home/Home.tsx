import GameCardSection from "./components/gameCardsSection/gameCardsSection";
import SectionTitle from "../../components/sectionTitle/sectionTitle";
import Welcome from "./components/welcome/Welcome";
import "./home.css";
import {getAllUsers, addUser} from '../../services/getAllUsers.js'
import { useEffect } from "react";

const MainHome = () => {
  const getAllUsersFromAPI = () => {
    Promise.all([getAllUsers()])
    .then((res) => console.log(res))
  }

  const bodyExample = {
    id: "5",
    name: "Popipo",
    password: "12455yy7768"
  }

  const addUserFromAPI = () => {
    Promise.all([addUser(bodyExample, 'SoyUnQueryParam')]).then((res:any) => console.log(res))
  }

  useEffect(() => {
    getAllUsersFromAPI()
    addUserFromAPI()
  }, [])

  return (
    <div className="mainHome d-flex justify-content-center flex-column align-items-center ">
      <div className="mainHome__titleContainer">
        <Welcome />
      </div>
      <div className="mainHome__someTitleContainer d-flex justify-content-center align-items-center">
        <SectionTitle title='Algunos Títulos'/>
      </div>
      <div className="mainHome__recomendedTitlesContainer d-flex justify-content-center">
        <GameCardSection />
      </div>
    </div>
  )
};

export default MainHome;
