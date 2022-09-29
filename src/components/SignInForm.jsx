import { useEffect, useState } from "react"
import {Button} from "./Button";
import {getToken} from "../services/login"
import "../styles/SignInForm.css"
import { useNavigate } from "react-router-dom";

export function SignInForm(){
    const [formData, setFormData] = useState({});
    const navigate = useNavigate()

    const handleChange = (e)=>{
        const currentData = formData
        const key = e.target.name;
        if(key === "rememberMe"){
            currentData[key]= e.target.checked
            setFormData(currentData)    
        }else{
            currentData[key]= e.target.value
            setFormData(currentData)
        }
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        

         
           const token =await getToken(formData)
            debugger
           if(token) navigate("/home") 
            
    }

    return(
        <div className="container">

        <form className="form">
            <h1 className="title">Sign In</h1>
            <label htmlFor="" className="textBox">
                <span>User name</span>
                
                <input type="text" placeholder="Enter user name" name="name" value={formData.email} onChange={handleChange}/>
            </label>
            <label htmlFor="" className="textBox">
                <span>Password</span>
                
                <input type="Email" placeholder="Enter password" name="password" value={formData.password} onChange={handleChange}/>
            </label>
            <label htmlFor="" className="checkBox">
                <input onChange={handleChange} type="checkbox" name="rememberMe" id="" />
                Remember me
            </label>
            <Button onPressAction={handleSubmit} innerText="Submit"/>
            <span>Forgot <a href="#recoveryPassPage">password?</a></span>
        </form>
        </div>
    )
}