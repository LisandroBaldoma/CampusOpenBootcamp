/*
 *Ejemplo de uso de:
 * - UseState()
 * - UseRef()
 * - UseEffect()
 */

import React, { useState, useRef, useEffect } from "react";

const Ejemplo2 = () => {
  // dos contadores distintos con estados diferentes

  const [contador1, setContador1] = useState(0);
  const [contador2, setContador2] = useState(0);

  // Vamos a crear una referenci den useRef() para asociar una variable con un elemento del DOM del componente (vista HTML)

  const miRef = useRef();

  function incrementar1() {
    setContador1(contador1 + 1);
  }
  function incrementar2() {
    setContador2(contador2 + 1);
  }

  /**
   * UseEffect
   */
  /**
   * ? caso1: Ejecutar SIEMPRE un snippet del codigo
   * Cada vez que haya un cmbio en el estado del componente
   * se ejecuta aquello que este dentro del useEfect()
  
   useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DEL COMPONENTE");
    console.log("Mostrando Referencia a elemento del DOM:");
    console.log(miRef);
  });
*/

  /**
   * ? Caso2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
   * cada vez que haya un cambio en el contador 1, se ejecuta el useEffect
   
  useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1");
    console.log("Mostrando Referencia a elemento del DOM:");
    console.log(miRef);
  }, [contador1]);
*/
  /**
   * ? Caso3: Ejecutar SOLO CUANDO CAMBIE CONTADOR1
   * cada vez que haya un cambio en el contador 1 o el contador 2, se ejecuta el useEffect
   */
  useEffect(() => {
    console.log("CAMBIO EN EL ESTADO DEL CONTADOR 1 / CONTADOR 2");
    console.log("Mostrando Referencia a elemento del DOM:");
    console.log(miRef);
  }, [contador1,contador2]);

  return (
    <div>
      <h1>***Ejemplo de useState(), useRef() y useEfect() ***</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      {/*Elemento referenciado */}
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>Incrementar Contador 1</button>
        <button onClick={incrementar2}>Incrementar Contador 2</button>
      </div>
    </div>
  );
};

export default Ejemplo2;
