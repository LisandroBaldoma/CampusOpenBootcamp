import React, {useState} from "react";

const Ejemplo1 = () => {

  const valorInicial = 0;
  
  const personaInicial = {
    nombre: "Marin",
    email: "martin@imaginagroup.com"
  }

  const [contador, setContador] = useState(valorInicial);
  const [persona, setPersona] = useState(personaInicial);

  /**
   * Funcion para actualizar el estado privado que contiene el contador
   */

  function incrementarContador() {
    // ? functionParaCambiar(nuevoValor)
    setContador(contador + 1);
  }

  /**
   * Funcion para actualizar el estado de personas en el componente
   */

  function actualizarPersona() {
    setPersona({
        nombre: "Lisandro",
        email: "baldomaLisaandro@hotmail.com",
      });
  }  

  return (
  <div>
    <h1>***Ejemplo de useState() ***</h1>
    <h2>CONTADOR: {contador}</h2>
    <h2>DATOS DE LA PERSONA:</h2>
    <h3>NOMBRE: {persona.nombre}</h3>
    <h4>EMAIL: {persona.email}</h4>
    <button onClick={incrementarContador}>Incrementar Contador</button>
    <button onClick={actualizarPersona}>Actualizar Persona</button>    
  </div>
  );
}
export default Ejemplo1;
