import {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/LoginPage.css"


export default function LoginPage(){
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();


    async function submitHandler(e){
        e.preventDefault();
        try{
            if (isRegister){
                await register(username,email,password);
            }else{
                await login(email,password);
            }
            navigate("/HomePage")
        }
        catch (err) {
            setError(err.message);
        }
     } 
    
    

    return(
        <>
        <div className="sfondo-login-page">

            <div className="auth-box">
                    <h1>{isRegister? "Registrati" : "Accedi"}</h1>
                    {error && <p>{error}</p>}

                        <form onSubmit={submitHandler}>
                            {isRegister && (
                                <div className="campo-form">
                                <label htmlFor="username">Username:</label>
                                <input type= "text" name="username"></input>
                            </div>

                            )}
                            <div className="campo-form">
                                <label htmlFor="email">Email:</label>
                                <input type= "text" name="email"></input>
                            </div>
                            <div className="campo-form">
                                <label htmlFor="password">Password:</label>
                                <input type="text" name="password"></input>
                            </div>
                            <button className="btn-accedi" type="sumbit">{isRegister? "Registrati": "Accedi"}</button>
                        </form>

                            <div className="link-al-register">
                                <p>{isRegister? "Hai già un account?": "Non hai un account"}{" "}
                                    <button onClick={
                                        ()=>{setIsRegister(!isRegister);
                                            setError(" ");
                                        }
                                        }>{isRegister?"Accedi":"Registrati"}</button>
                                </p>
                              
                            </div>
            </div> 

        </div>
        
        
        
        
        
        </>
    )
}