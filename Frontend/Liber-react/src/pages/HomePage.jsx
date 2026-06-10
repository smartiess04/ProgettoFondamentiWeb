import {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import CardBook from "../components/CardBook"
import "../style/HomePage.css"

export default function HomePage(){
    return(
      <div className="sfondo-home-page">
        <Navbar/>

        <main className="home-page-content">

        <div className="books-containers">
        <CardBook
          coverUrl="https://placeholder.com"
          booktile="Il Signore degli Anelli"
          author="J.R.R. Tolkien"
          genere="Fantasy"
          pagine="1200"
          anno="1954"
        />
        <CardBook
          coverUrl="https://placeholder.com"
          booktile="Il Signore degli Anelli"
          author="J.R.R. Tolkien"
          genere="Fantasy"
          pagine="1200"
          anno="1954"
        />
        <CardBook
          coverUrl="https://placeholder.com"
          booktile="Il Signore degli Anelli"
          author="J.R.R. Tolkien"
          genere="Fantasy"
          pagine="1200"
          anno="1954"
        />

        </div>
        </main>

      </div>
    )    
}