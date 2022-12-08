import { useState } from "react";


import Auth from "./components/auth/auth";
import Home from "./components/home/home";

function App() {
 
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  // return (<Auth></Auth>)
  if(isAuthenticated)
    return <Home />
 else
    return <Auth setIsAuthenticated = { setIsAuthenticated } />
}

export default App;