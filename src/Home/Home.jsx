import React, {useState} from "react";
import Form from "../Form/Form"
import "./home.css"


export default function Home() {
	const [name, setName] = useState("")

  let json = {
    Aerolineas: [
      { id: "1", name: "Avianca" },
      { id: "2", name: "VivaAir" },
      { id: "3", name: "Latam" },
      { id: "4", name: "Wingo" },
    ],
  };

  const handleClick =(e) => {
    e.preventDefault();
	 setName(e.target.textContent)
	 let open= document.getElementById("open")
	 open.className ="open"
  }
  return (
    <div id="caja">
		 <h1 className="titulo">Elige una aerolinea para viajar</h1>
		 <nav >
			 <ul className="menu">
        <li>
          <button id= "btn" onClick={(e) => {handleClick(e)}} >
            {json.Aerolineas[0].name}
          </button>
        </li>
		  <li>
          <button id= "btn" onClick={(e) => {handleClick(e)}} >
            {json.Aerolineas[1].name}
          </button>
        </li>
		  <li>
          <button id= "btn" onClick={(e) => {handleClick(e)}} >
            {json.Aerolineas[2].name}
          </button>
        </li>
		  <li>
          <button id= "btn" onClick={(e) => {handleClick(e)}} >
            {json.Aerolineas[3].name}
          </button>
        </li>
      </ul>
		 </nav>      
		<Form linea={name}></Form>
    </div>
  );
}
