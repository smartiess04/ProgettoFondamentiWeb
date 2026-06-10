import {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import "../style/HomePage.css"

export default function HomePage(){
    return(
      <div className="sfondo-home-page">
        <Navbar/>
      </div>
    )    
}