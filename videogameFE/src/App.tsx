import RouterList from "./components/Router/RouterList";
import { userContext } from "./contexts/userContext";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import "./mainHome.css";

interface UserType {
  name: string;
  email: string;
  password: string;
  userName: string,
  userId: string
}
function App() {
  const [user, setUser] = useState<UserType>({name: '', email: '', password: '', userName: '', userId: ''});
  const userContextValue = {user, setUser}

  useEffect(() => {
    localStorage.setItem('usuario', JSON.stringify(user));
  }, [user])

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
