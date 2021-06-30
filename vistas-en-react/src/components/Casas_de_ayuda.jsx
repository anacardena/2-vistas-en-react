import React from 'react'
import '../utils/css/ayuda_estilos.css'
import parrafo2 '../utils/imagenes/parr'
import parrafo3 from '../utils/images/js.png'
import localidad from '../utils/images/css3.png'

function Casas_de_ayuda () {
    return (
       <div id="Titulo_principal"> Casas de igualdad de oportunidades para las mujeres</div>
       <div id="Contenido">
       <div className="secciones">
       <h2> ¿Qué son las casa de ayuda?</h2
        <p> son espacios de encuentro entre mujeres para el conocimiento de sus derechos y el desarrollo de procesos orientados al empoderamiento social y político.
           Son el espacio privilegiado para que la  Política Pública de Mujeres y Equidad de Género  llegue con presencia, acompañamiento y servicios a las mujeres diversas que habitan el territorio rural y urbano de Bogotá.</p>
           </div>
        <div className="secciones">
        <h2> ¿Cuáles son los Objetivos de las Casas de Igualdad de Oportunidades?</h2
        <ul>
         <li> Difundir los derechos de las mujeres y los mecanismos para la exigibilidad de los mismos, con el fin de garantizar el ejercicio pleno de su ciudadanía.</li>
         <li>Fortalecer desde el enfoque de derechos de las mujeres y de género a: grupos, redes, colectivos y organizaciones sociales de mujeres para su empoderamiento e  incidencia en los procesos de desarrollo local.</li>
         </li>Promover con diferentes actores locales el desarrollo de acciones colectivas de corresponsabilidad con los derechos de las mujeres.</li>
         <li>Promover la participación y representación social y política de las mujeres en las localidades.</li>
         <li> Propiciar en el ámbito local la articulación interinstitucional y transectorial con autoridades administrativas competentes para garantizar el derecho de las mujeres a una vida libre de violencias.</li>
         </ul>
         </div>
          <div className="secciones">
        <h2> ¿Qué encuentran las mujeres en las Casas de Igualdad de Oportunidades?</h2
        <ul> 
        <li>Orientación y asesoría socio-jurídica: A través de abogadas especialistas en derechos de las mujeres y enfoque de género, se brinda orientación y asesoría socio jurídica de acuerdo con el tema consultado.</li>
        <li>Orientación psicosocial: Es un espacio de conversación individual, en el cual las mujeres participan en sesiones de diálogo y descargan sus emociones frente a los problemas que las afectan.</li>
        <li>Actividades de empoderamiento y bienestar: Se realizan charlas de autocuidado, danza, gimnasia, yoga, cursos de idiomas on el fin de garantizar el ejercicio pleno de su ciudadanía.</li>
        <li>Acciones para el empoderamiento de las mujeres: Se promueve la participación así como la representación social y política de las mujeres en las localidades. </li>
        <li>Centros de Inclusión Digital: Son espacios para reconocer las voces de las mujeres y promover el intercambio de saberes, a través del acceso y uso de tecnologías de información y comunicación (TIC), buscando así disminuir la brecha digital de género.</li>
        </ul>
       <img id="parrafo"  src={localidad} />
       <img   src={parrafo2} />
       <img  src={parrafo3} />
       </div>
      
    )

}

export default Casas_de_ayuda