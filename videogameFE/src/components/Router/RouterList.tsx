import GamePage from "../../pages/GamePage/GamePage";
import Register from "../../pages/Register/Register";
import { Route, Routes } from "react-router-dom";
import MyList from "../../pages/MyLists/MyList";
import Titles from "../../pages/Titles/Titles";
import MainHome from "../../pages/Home/Home";
import Login from "../../pages/LogIn/Login";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHome />} />
      <Route path="/titles" element={<Titles />} />
      <Route path="/game" element={<GamePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/myList" element={<MyList />} />
    </Routes>
  );
};

export default RouterList;
