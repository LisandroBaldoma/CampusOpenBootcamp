import React, { useState } from "react";

//Definiendo estilos en constantes
//? Estilos para usuarios logueado

const loggedStyle = {
  color: "white",
};

//? Estilos para usuarios logueado

const unloggedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  // Generamos un estado para el componente
  // y asi comprobar que el usuario este o no Logueado

  const [logged, setLogged] = useState(false);

  const greetingUser = () => <p>Hola , {props.name}</p>;
  const pleaseLoggin = () => <p>Por favor Loggin</p>;

  return (
    <div style={logged ? loggedStyle : unloggedStyle}>
      {logged ? greetingUser() : pleaseLoggin()}

      <button
        onClick={() => {
          console.log("botonpulsado");
          setLogged(!logged);
        }}
      >
        {logged ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default GreetingStyled;
