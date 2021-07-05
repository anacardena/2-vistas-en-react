import React from 'react'
import '../utils/css/nosotras_estilos.css'
import titulo from '../utils/images/titulo_nosotras.png'


function Somos () {
    return (

    <div id="Padre">
{/*este es el div que contiene tel título*/}
         <div style={{backgroundImage:`url(${titulo})`}} id="Titulo_principal">
      ¿Quiénes somos?
          </div>
       {/*este es el div que contiene los dos párrafos*/}   
       <div id="Contenido">
        {/*este es el div que contiene el primer párrafo*/}
            <div id="parrafo1">
            <h2> ¿Porqué acción positiva?</h2>
             <p> Acción Positiva

Concepto que surge en Estados Unidos en la década de los 60 como parte de las estrategias puestas en marcha por los gobiernos para luchar contra las desigualdades, fundamentalmente de carácter laboral, 
que sufren distintos colectivos por razón de su sexo, raza, origen, religión, etc. El Comité para la Igualdad entre mujeres y hombres del Consejo de Europa define este concepto como las
 "estrategias destinadas a establecer la igualdad de oportunidades por medio de medidas que permitan contrastar o corregir aquellas discriminaciones que son el resultado de prácticas o sistemas sociales".</p>
            </div>
         {/*este es el div que contiene el segundo párrafo*/}    
                <div id="parrafo2">
                <h2> ¿Cuál es nuestro objetivo? </h2>
               La problemática en la que nos enfocamos es en la violencia contra la mujer, con el propósito de ayudar y brindar información que pueda ser de utilidad para las mujeres que estén pasando por este flagelo.


El objetivo principal de nuestro proyecto es contribuir con una causa social que al día de hoy no ha tenido el reconocimiento, el apoyo y masificación que necesita.

 <div id="parrafo3">
                <h2> hablemos un poco de nuestra página </h2>
                Nos centramos en desarrollar una página web que ayude a solucionar la problemática anteriormente mencionada.
Partimos de la implementación de información referente a este tema, enfocándonos en qué es, cuáles son sus causas, cuáles son sus tipos y como podemos ayudar a una víctima desde el papel que algunos tenemos como testigos o entes externos. 
       También incluimos información de contacto y localización con albergues y fundaciones sectorizadas, qué brinden apoyo y acompañamiento a las mujeres víctimas de violencia, haciendo descripciones de estos.
        Sabemos que una de las principales razones por las que este flagelo ocurre es por la falta de información y apoyo psicológico a las mujeres que son víctimas de esta violencia, y  con el fin de mitigar esto incluimos contactos de psicólogos y asesoramiento legal especializado en el tema.
un tono omnipresente en esta lucha ese es el violeta.

Se trata del color internacional del movimiento por la igualdad de derechos y el tono que las sufragistas estadounidenses adoptaron como uniforme en la marcha de Washinhton a favor de la Enmienda por la Igualdad de Derechos en 1978.

El violeta, color de los soberanos, simboliza la sangre real que corre por las venas de cada luchadora por el derecho al voto, simboliza su conciencia de la libertad y la dignidad
         </div>       





               </div>

         </div>
      
    </div>
      
    )
}

export default Somos