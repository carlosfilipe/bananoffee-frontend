import React from "react";
import "./styles.css";



import logo from '../../assets/logo.png';

export default function Linktree() {
  const LINKS = [
    {
      label: "Faça seu pedido - Takeout",
      url: "https://api.whatsapp.com/send?phone=5561982996510&text=Oiii!",
    },
    {
      label: "Ifood",
      url: "https://www.ifood.com.br/delivery/brasilia-df/bananoffee-setor-industrial-gama/b964ead1-9000-4601-ba6a-2bbdf2c37ec9?UTM_Medium=share",
    },
    {
      label: "Encomende sua torta inteira",
      url: "https://api.whatsapp.com/send?phone=5561982996510&text=Oiii!",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/bananoffeedoceria/",
    },
    {
      label: "Dúvidas/Sugestões",
      url: "https://api.whatsapp.com/send?phone=5561982996510&text=Oiii!",
    },
    {
      label: "Cardápio",
      url: "https://api.whatsapp.com/send?phone=5561982996510&text=Oiii!",
    },
    
  ];

  function renderLinks() {
    return LINKS.map((link) => {
      return (
        <a className="link-button" href={link.url} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      );
    });
  }

  return (
    <div className="linktree-container">
      <img className="logo" src={logo}  />

      {renderLinks()}
      
    </div>
  );
}
