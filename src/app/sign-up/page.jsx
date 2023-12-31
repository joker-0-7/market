"use client";
import AuthForm from "../components/AuthForm";
import { useState } from "react";

const SignUp = ()=>{
    const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
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
                    Email={Email}
                    setEmail={setEmail}
                    Password={Password}
                    setPassword={setPassword}
                    name={name}
                    setName={setName}
                    phone={phone}
                    setPhone={setPhone}
                    address={address}
                    setAddress={setAddress}
                    city={city}
                    setCity={setCity}
                    zip={zip}
                    setZip={setZip}
                    handleSubmit={handleSubmit}
                    page={'register'}
                    />
                </div>
            </div>
        </div>
    )
}
export default SignUp;