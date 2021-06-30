import React from 'react'// importar siempre react//
import '../utils/css/inicio.estilos.css'
import {Link} from "react-router-dom"

function Title() {
	return (
		<div className="padre">
		<div className="titulo"> ¡bienvenidos!</div>
		<div className="container">
           <Link to="/Nosotras" class="btn"> 
            <svg width="277" height="62"> 
                <defs>
                <linearGradient id="grad1"> 
                <stop offset="0%" stop-color="#FF8282"/> <stop offset="100%" stop-color="#E178ED" /> 
                </linearGradient> 
                </defs> <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect> 
            </svg> 
            <span>¿quienes somos?</span>
            </Link> 
     </div>
      <div className="container">
           <Link to="/Ayuda" class="btn"> 
            <svg width="277" height="62"> 
                <defs>
                <linearGradient id="grad1"> 
                <stop offset="0%" stop-color="#FF8282"/> <stop offset="100%" stop-color="#E178ED" /> 
                </linearGradient> 
                </defs> <rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect> 
            </svg> 
            <span>Casas de Ayuda</span>
            </Link> 
     </div>
     </div>
		)	

};
export default Title


       