"use client";
import AuthForm from "../components/AuthForm";
import { useState } from "react";

const Login = ()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e)=>{
    e.preventDefault()
  }
    return(
        <div className="register">
            <div className="container">
                <div className="heading text-center">
                    <h1>تسجيل مستخدم جديد</h1>
                </div>
                <div className="form">
                    <AuthForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSubmit={handleSubmit}
                    page={'login'}
                    />
                </div>
            </div>
        </div>
    )
}
export default Login;