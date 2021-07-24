import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Login() {

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/add");
    } 

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function login(){
    let item={email, password}
    
    console.log(email, password);
    let result = await fetch("http://backend/api/login", {
      method:'POST',
      headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      },
      body:JSON.stringify(item)
    });

    result = await result.json();
    localStorage.setItem("user-info",JSON.stringify(result));
    history.push("/add");
  }
    
    



  return (
    <div>
      <Header />
      <h1>Login Page</h1>
      <div className="col-sm-6 offset-sm-3">
        <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}  className="form-control "/>
        <br />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} className="form-control "/>
        <br />
        <button onClick={ login } className="btn btn-primary">Login</button>
      </div>

    </div>
  );
}

export default Login;
