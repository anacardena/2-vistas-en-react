import React from 'react'// importar siempre react//
import '../utils/css/inicio.estilos.css'
import {Link} from "react-router-dom"
import  video from '../utils/images/Science - 591.mp4'
import logo  from  '../utils/images/logo.jpeg'
import ReactPlayer from 'react-player'
function Title() {
	return (
    
	<div className="padre_inicio">
	{/* este es la columna 1*/}
		     <div  id="column1">
		        <ReactPlayer url={video} muted playing loop height="100%" width="100%"/>
	         </div>
   {/* este es el contenedor de la segunda columna*/}
	         <div className="column2"> 
	{/* este es el contenedor del título*/}     
		          <div className="titulo"> ¡Bienvenidos! </div>
		           <img   src={logo} />
	{/* este es el contenedor de los botones*/}	          
		       <div id="Botones">
		        {/* este es el contenedor del primer botón*/}
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
                 {/* este es el contenedor del segundo botón*/}   
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
            </div>
     </div>
		)	

};
export default Title


       