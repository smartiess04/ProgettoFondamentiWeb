import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

import { useAuth } from "../context/AuthContext"; 
import "../style/Sidebar.css"; 

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const navigate = useNavigate(); 
  const { logout } = useAuth();

  const menuItems = [
    { label: "HOME", icon: "ai-home-alt1", path: "/HomePage" },
    { label: "I MIEI LIBRI", icon: "ai-book-open", path: "/libreria" },
    { label: "PROGRESSO GIORNALIERO", icon: "ai-percentage", path: "/statistiche" },
    { label: "PROFILO", icon: "ai-person", path: "/profilo" },
    { label: "LOGOUT", icon: "ai-sign-out", isLogout: true } // Identificatore unico
  ];

  const handleMenuClick = async (index, item) => {
    setActiveIndex(index); // Sposta la barretta bianca

    if (item.isLogout) {
      navigate("/"); 
      await logout;
      
    } else {
        
      navigate(item.path);
    }
  };

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <button 
        type="button" 
        className="sidebar-burger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="ai-three-line-horizontal"></i>
      </button>

      <div className="sidebar-inner">
        <header>
          <div className="brand">
            <i className="ai-book-open" style={{ fontSize: "28px" }}></i>
            <span>Liber</span>
          </div>
        </header>

        {/* La barretta bianca seguirà dinamicamente l'activeIndex */}
        <nav className="menu" style={{ "--top": `${activeIndex * 56}px` }}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              type="button"
              className={activeIndex === index ? "active" : ""}
              // Sostituiamo il semplice setActiveIndex con la nostra nuova funzione
              onClick={() => handleMenuClick(index, item)} 
            >
              <i className={item.icon}></i>
              <p>{item.label}</p>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}