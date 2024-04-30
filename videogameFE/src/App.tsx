import RouterList from "./components/Router/RouterList";
import { userContext } from "./contexts/userContext";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";
import "./mainHome.css";


function App() {
  interface UserType {
    name: string;
    email: string;
    password: string;
    userName: string,
    userId: string
  }

  const [user, setUser] = useState<UserType>({name: '', email: '', password: '', userName: '', userId: ''});

  const userContextValue = {user, setUser}

  console.log(user)

  return (
    <userContext.Provider value={userContextValue}>
      <BrowserRouter>
        <div className="container-fluid appContainer">
          {user.name ? <Navbar /> : null}
          <RouterList />
        </div>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
