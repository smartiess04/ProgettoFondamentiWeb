import {useState} from "react"
import { Link } from "react-router-dom";


export default function CardBox(props){
const [isOpen, setIsOpen] = useState(false);
const [isFavorite, setIsFavorite] = useState(false);

const toggleFavorite= (e)=>{
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite)
}


    return(
         <>
         <div className="card-box" onClick={(e)=>{
            e.preventDefault();
            setIsOpen(!isOpen)}}> 
            <img src={props.coverUrl} alt={props.booktile} className="book-cover"/>
                <div className="book-card-overlay">
                    <h2 className="book-title">{props.booktile}</h2>
                    <p className="author">{props.author}</p>
                </div>

               {isOpen && (
                <div className="opened-book-card" onClick={()=>{setIsOpen(false)}}>
                    <ul>
                        <li><u>Genere:</u>{props.genere}</li>
                        <li><u>Pagine:</u>{props.pagine}</li>
                        <li><u>Anno:</u>{props.anno}</li>
                        <li><button className="button-favorite" onClick={toggleFavorite}>⭐️ {isFavorite?"Preferito":"NonPreferito"}</button></li>
                        <li><Link a className="link-2-discussione" to="/DiscussionePage">Discussione</Link></li>
                        
                   </ul>



                </div>


               )}
           

        </div>
        
        
        </>
    )

}