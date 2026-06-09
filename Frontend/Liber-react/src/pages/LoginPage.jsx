import {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import "../style/LoginPage.css"
import { useAuth } from "../context/AuthContext";


export default function LoginPage() { 
    const { login, register } = useAuth();
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


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
                                <input id="username" value={username} onChange={e => setUsername(e.target.value)} required type= "text" name="username"></input>
                            </div>

                            )}
                            <div className="campo-form">
                                <label htmlFor="email">Email:</label>
                                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required type= "text" name="email"></input>
                            </div>
                            <div className="campo-form">
                                <label htmlFor="password">Password:</label>
                                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} minLength={6} required type="text" name="password"></input>
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