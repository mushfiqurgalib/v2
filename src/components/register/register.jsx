import { useRef } from "react";
import "./register.css";

export default function Register({ setType }) {
  const mobileRef = useRef(null);
  const passwordRef = useRef(null);


  const handleSubmit = () => {
    fetch("http://localhost:5000/api/v1/employee/", {
      method: "POST",
      
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        number: mobileRef.current.value,
        password: passwordRef.current.value,
      }),
    }).then(response => response.json()).then(
        obj => {
          alert(obj.message);
          setType('login');
        }
    );
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">SocialBook</h3>
        
        </div>
        <div className="registerRight">
          <div className="registerBox">
        
            <input ref={mobileRef} placeholder="Mobile" className="registerInput" />
            <input
              ref={passwordRef}
              placeholder="Password"
              className="registerInput"
              type="password"
            />
         
            <button className="registerButton" onClick={handleSubmit}>
              Sign up
            </button>
            <button 
              className="registerLoginButton"
              onClick={ () => setType('login') }
            >
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}