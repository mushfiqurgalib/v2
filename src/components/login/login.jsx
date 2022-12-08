import "./login.css";

import { useRef } from "react";

export default function Login( { setIsAuthenticated, setType, setNumber } ) {
  const mobileRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {
    fetch("http://localhost:5000/api/v1/employee/login", {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        number: mobileRef.current.value,
        password: passwordRef.current.value,
      }),
    }).then(response => response.json()).then(
        obj => {
          console.log(obj);
          if(obj.length==1){
            alert("Successful");
            localStorage.setItem('number',obj[0].number);
            setIsAuthenticated(true);
          }
          else
          {alert("Failed");}
        //   alert(obj)
        // //  setIsAuthenticated(obj.isAuthenticated);
        //   setNumber(obj.number);
        }
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialBook</h3>
          <span className="loginDesc">
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input 
              ref={ mobileRef } 
              placeholder="Mobile Number" 
              className="loginInput" 
            />
            <input
              ref={ passwordRef }
              placeholder="Password"
              className="loginInput"
              type="password"
            />
            <button 
              className="loginButton" 
              onClick={ handleSubmit }
            >
              Log in
            </button>
            <button 
              className="loginRegisterButton"
              onClick={ () => setType('register') }
            >
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}