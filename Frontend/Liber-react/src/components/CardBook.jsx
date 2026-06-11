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
            <img src={props.copertinaURL} alt={props.titolo} className="book-cover"/>
                <div className="book-card-overlay">
                    <h2 className="book-title">{props.titolo}</h2>
                    <p className="author">{props.autore}</p>
                </div>

               {isOpen && (
                <div className="opened-book-card" onClick={()=>{setIsOpen(false)}}>
                    <ul>
                        <li><u>Genere:</u> {props.genere}</li>
                        <li><u>Pagine:</u>{ props.pagine}</li>
                        <li><u>Anno:</u> {props.anno}</li>
                        <li><button className="button-favorite" onClick={toggleFavorite}>⭐️ {isFavorite?"Preferito":"NonPreferito"}</button></li>
                        <li><Link className="link-2-discussione" to="/DiscussionePage">Discussione</Link></li>
                        
                   </ul>



                </div>


               )}
           

        </div>
        
        
        </>
    )

}