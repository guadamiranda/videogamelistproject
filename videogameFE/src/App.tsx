import RouterList from "./components/Router/RouterList";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./mainHome.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid appContainer">
        <Navbar />
        <RouterList />
      </div>
    </BrowserRouter>
  );
}

export default App;
