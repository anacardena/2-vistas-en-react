import React from 'react'
import '../utils/css/nosotras_estilos.css'
import titulo from '../utils/images/titulo_nosotras.png'
import a from '../utils/images/parrafo1.0.jpg'
import b from '../utils/images/parrafo2.0.jpg'
import c from '../utils/images/parrafo3.0.jpg'


function Somos () {
    return (

    <div id="contenedor_Padre">
{/*este es el div que contiene tel título*/}
         <div style={{backgroundImage:`url(${titulo})`}} id="Titulo_principal">
         <div className="slideup">Nosotras</div> 
         </div>
       {/*este es el div que contiene los dos párrafos*/}   
       <div id="Contenidoparrafos">
        {/*este es el div que contiene el primer párrafo*/}
                <div id="parrafo_1">
                    <div className="texto">
                     <h2> ¿Porqué acción positiva?</h2>
                    <p> Este concepto surge  en Estados Unidos en la década de los 60 como parte de las estrategias puestas en marcha por los gobiernos para luchar contra las desigualdades, fundamentalmente de carácter laboral, 
                     que sufren distintos colectivos por razón de su <strong>sexo, raza, origen, religión </strong>, etc. El Comité para la Igualdad entre mujeres y hombres del Consejo de Europa define este concepto como las
                     "estrategias destinadas a establecer la igualdad de oportunidades por medio de medidas que permitan contrastar o corregir aquellas discriminaciones que son el resultado de prácticas o sistemas sociales".</p>
                    </div>
                    <div className="sección2">
                  
                      <div className="contenedor_carta">
                      <div className="carta">
                      <div className="lado frente">
                      <img   src={a} />  
                      </div>
                      <div className="lado atras">
                      "Una mujer fuerte no sigue a la multitud. Ella es ella misma. Loretta Young".</div>
                     </div>
                     </div>
                    </div>
                </div>
         
                <div id="parrafo_2">
                     <div className="sección2">
                     
                      <div className="contenedor_carta">
                      <div className="carta">
                      <div className="lado frente">
                      <img   src={b} />  
                      </div>
                      <div className="lado atras">“No nacemos como mujer, sino que nos convertimos en una”. Simone de Beavoir. </div>
                     </div>
                     </div>
                    </div>
                    <div className="texto">
                     <h2> ¿Cuál es nuestro objetivo?</h2>
                     ¿te ha pasado que buscas información a cerca de un tema en específico y aunque la información que encuentras es buena no sabes qué guardar?
                     Pues bien, así le suceden a muchas mujeres con la información en la web pues al ser tanta no saben donde encontrar ayuda.
                     La problemática en la que nos enfocamos es en la violencia contra la mujer, con el propósito de ayudar y brindar información que pueda ser de utilidad para las mujeres que estén pasando por este flagelo.
                     El objetivo principal de esta página es contribuir con una causa social que al día de hoy no ha tenido el reconocimiento, el apoyo y masificación que necesita.
                    </div>
                      
                </div>    
                <div id="parrafo_3">
                     
                     <div className="texto">
                     <h2> Hablemos un poco de esta página</h2>
                     <p>  Nos centramos en desarrollar esta página web que ayude a solucionar la problemática anteriormente mencionada.
                   Partimos de la implementación de información referente a este tema, enfocándonos en qué es, cuáles son sus causas, cuáles son sus tipos y como podemos ayudar a una víctima desde el papel que algunos tenemos como testigos o entes externos. 
                  También incluimos información de contacto y localización con albergues y fundaciones sectorizadas, qué brinden apoyo y acompañamiento a las mujeres víctimas de violencia, haciendo descripciones de estos.
                  Sabemos que una de las principales razones por las que este flagelo ocurre es por la falta de información y apoyo psicológico a las mujeres que son víctimas de  violencia, y  con el fin de mitigar esto incluimos contactos de psicólogos y asesoramiento legal especializado en el tema.
                  ¿Porqué nuestrocolor violeta?
                  un tono omnipresente en esta lucha ese es el violeta.

               Se trata del color internacional del movimiento por la igualdad de derechos y el tono que las sufragistas estadounidenses adoptaron como uniforme en la marcha de Washinhton a favor de la Enmienda por la Igualdad de Derechos en 1978.
                El violeta, color de los soberanos, simboliza la sangre real que corre por las venas de cada luchadora por el derecho al voto, simboliza su conciencia de la libertad y la dignidad.</p>
                   </div>
                   <div className="sección2">
                      
                      <div className="contenedor_carta">
                      <div className="carta">
                      <div className="lado frente">
                      <img   src={c} />  
                      </div>
                      <div className="lado atras">
                      "Hagas lo que hagas, sé diferente. Ese fue el consejo que me dio mi madre y no puedo pensar en un mejor consejo para una emprendedora. Si eres diferente te destacarás."
                      </div>
                     </div>
                     </div>
                    </div>
                 </div>       
          </div>

     </div>
      
    )
}

export default Somos
