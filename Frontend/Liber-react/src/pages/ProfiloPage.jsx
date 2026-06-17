import Navbar from "../components/Navbar"
import { useState } from "react";
import "../style/ProfiloPage.css"

const EMOJI_SET = ["👤", "🦊", "🦉", "🦁", "🦄", "👽", "🤖", "👻", "🤓", "🕵🏻‍♂️", "🧙🏼‍♂️", "👾"]

export default function ProfiloPage(){
    const [open, setIsOpen] = useState(false);
    const [profilePic, setProfilePic] = useState("🐿️");
    const [profile, setProfile] = useState(false);


    const choseAvatarHandler = (nuovoAvatar) => {
        setProfilePic(nuovoAvatar);
    }

   return(
     <>
        <div className="sfondo-home-page">
            <Navbar />
             <div className="profile-box" onClick={(e)=>{
                e.preventDefault();
                }}>
                <h2 className="title-profile-page">MyProfile</h2>

                <div className="profile-content">
                    <div className="icona-profilo" onClick={(e)=>{
                        e.preventDefault();
                        setIsOpen(!open);
                        setProfile(!profile)}}
                        title= "Cambia immagine profilo">
                        <span className="icona-placeholder">{profilePic}</span>
                        
                   </div>
                   {!profile ?(
                    <div className="elementi-profilebox" >
                                <span className="info-profile">nome:</span>
                                <span className="info-profile">username:</span>
                                <span className="info-profile">generi preferiti:</span>
                                <span className="info-profile">bio:</span>
                    </div>
                   ):(
                        <div className="elementi-profilebox" >
                                <span className="modifica-profilo">Nome: <input type = "text" className="info-nome-profile" placeholder="inserire nuovo nome"/></span>
                                <span className="modifica-profilo">Username: <input type = "text"  placeholder="inserire nuovo username"/></span>
                                <span className="modifica-profilo">Genere preferito: <select>
                                        <option>Classici</option>
                                        <option>fantasy</option>
                                        <option>Gialli</option>
                                        <option>Sci-fi</option>
                                        <option>Romantici</option>
                                        <option>Storici</option>
                                        <option>Psicologia</option>
                                        <option>Biografico</option>
                                    </select></span>
                                <span className="modifica-profilo">Bio:<input type = "text"  placeholder="inserire bio"/></span>
                        </div>
                    )}
                </div>

                {open && (
                    <div className="choose-profile-icon">
                        <p>Scegli il tuo nuovo avatar</p>

                        <div className="emoji-grid">
                            {EMOJI_SET.map((emoji, index) => (
                                <button 
                                    key={index} 
                                    className="emoji-btn"
                                    onClick={() => choseAvatarHandler(emoji)}
                                >
                                    {emoji}
                                </button>
                            ))}
                        </div>
                    </div>
                    )}    

                    <div className = "btn-modifica">
                        <button className = "btn-modifica-btn" onClick = {(e) =>{
                                e.preventDefault();
                                setProfile(!profile);
                                setIsOpen(!open)
                            }
                        }> 
                            {!profile ? "Modifica il profilo":"Salva le modifiche"}
                        </button>
                    </div>   
             </div>
         </div>
     </>
    )
}