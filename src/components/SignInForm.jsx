import { useState } from "react"
import {Button} from "./Button";
import "../styles/SignInForm.css"

export function SignInForm(){
    const [formData, setFormData] = useState({});

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
        console.log(formData)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(formData.password === "123" && formData.email === "test@test.com")
            return alert("Los datos ingresados son correctos")
        alert("Los datos ingresados no coinciden con un usuario activo. Vuelva a Ingresarlos")
    }

    return(
        <form className="form">
            <h1 className="title">Sign In</h1>
            <label htmlFor="" className="textBox">
                <span>Email adress</span>
                
                <input type="Email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChange}/>
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
    )
}