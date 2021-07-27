import React from "react";
import Header from "./header/header-bar";
import LoginForm from "./loginform/loginform";

export default function LoginView({Login}) {
  return (
      <div>
        <Header />
        <LoginForm Login={Login}/>
      </div>
    
  );
}
