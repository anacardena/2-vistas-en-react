import React from 'react'// importar siempre react//
import '../utils/css/inicio.estilos.css'
import {Link} from "react-router-dom"

function Title() {
	return (
		<div className="Container_Title">
		<h1 id="titulop"> ¡bienvenidos!</h1>
		<Link to="/Nosotras">
		<button type="button">¿quienes somos?</button>
		</Link>
		<Link to="/Ayuda">
		<button type="button"> Nosotras </button>
		</Link>
        </div>
		)	
};
export default Title