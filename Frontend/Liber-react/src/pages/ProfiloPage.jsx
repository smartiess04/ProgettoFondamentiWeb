import Navbar from "../components/Navbar"
import { useState } from "react";
import "../style/ProfiloPage.css"

const EMOJI_SET = ["👤", "🦊", "🦉", "🦁", "🦄", "👽", "🤖", "👻", "🤓", "🕵🏻‍♂️", "🧙🏼‍♂️", "👾"]

export default function ProfiloPage(){
    const [open, setIsOpen] = useState(false);
    const [profilePic, setProfilePic] = useState("🐿️");


    const choseAvatarHandler = (nuovoAvatar) => {
        setProfilePic(nuovoAvatar);
    }

   return(
     <>
        <div className="sfondo-home-page">
            <Navbar />
             <div className="profile-box">
                <h2 className="title-profile-page">MyProfile</h2>

                <div className="profile-content">
                    <div className="icona-profilo" onClick={(e)=>{
                        e.preventDefault();
                        setIsOpen(!open)}}
                        title= "Cambia immagine profilo">
                        <span className="icona-placeholder">{profilePic}</span>
                        
                   </div>
                    <div className="elementi-profilebox" >
                                <span className="info-nome-profile">nome:</span>
                                <span className="info-user-profile">username:</span>
                                <span className="info-generi-profile">generi preferiti:</span>
                                <span className="info-bio-profile">bio:</span>
                    </div>
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
             </div>
         </div>
     </>
    )
}