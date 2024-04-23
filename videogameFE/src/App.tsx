import RouterList from "./components/Router/RouterList";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { createContext, useState } from "react";
import "./mainHome.css";

export const userContext = createContext({});

function App() {
  const [user, setUser] = useState(null);

  const userContextValue = {user, setUser}

  return (
    <userContext.Provider value={userContextValue}>
      <BrowserRouter>
        <div className="container-fluid appContainer">
          <Navbar />
          <RouterList />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
