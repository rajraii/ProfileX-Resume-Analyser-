import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import "./signup.css";
// import signupGraphic from "../../assets/img/signup_graphic.png";
import signupGraphic from "../../assets/img/signup_graphic.png";
import { useGoogleLogin  } from '@react-oauth/google'

const SignUpPage = () => {
  const login = useGoogleLogin({
    onSuccess: async (response: any) => {
      console.log(response);
      const userDataResponse = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${response.access_token}`);
  
      if (userDataResponse.ok) {
        const userData = await userDataResponse.json();
        console.log(userData);
      } else {
        console.error('Failed to fetch user data from Google API');
      }
    },
  });


  return (
    <div className="signup-wrapper">
      <section className="signup-left">
        <div className="logo">
          <h1>Code Makers</h1>
        </div>
        <div className="login-form-container">
          <div className="signup-greet">
            <h3>Welcome to Code Maker</h3>
            <p>Login with your trusted platform to continue.</p>
          </div>

          <div className="login-platforms">
            <button className="login-platform-btn" onClick={() => login()}>
              <FcGoogle />
              Google
            </button>
            <button className="login-platform-btn">
              <AiFillFacebook fill="#1877F2" />
              Facebook
            </button>
          </div>

          <p className="signup-tnc">Account creation grants us data handling and storage permission.</p>
        </div>
      </section>

      <section className="signup-right">
        <img src={signupGraphic} alt="signup-graphic" />
      </section>
    </div>
  );
};

export default SignUpPage;
