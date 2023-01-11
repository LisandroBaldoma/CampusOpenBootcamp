import React, { useState } from "react";

let red = "0";
let green = "200";
let blue = "150";
// ? Estilo para usuario logueado

const loggedStyle = {
  backgroundColor: `rgb(${red}, ${green}, ${blue})`,
  color: "white",
  fontWeight: "bold",
};

//? Estilos para usuarios No logueado

const unloggedStyle = {
  backgroundColor: "tomato",
  color: "white",
  fontWeight: "bold",
};

// Login / Logout buttons

const LoginButton = ({ loginAction, propStyle }) => {
  return (
    <button style={propStyle} onClick={loginAction}>
      Login
    </button>
  );
};
const LogoutButton = ({ logoutAccion, propStyle }) => {
  return (
    <button style={propStyle} onClick={logoutAccion}>
      Logout
    </button>
  );
};

// ? (Expresion true) && expresion => se renderiza la expresion
// ? (Expresion false) && expresion => No se renderiza la expresion

const OpcionalRender = () => {
  const [access, setAccess] = useState(false);
  const [nMessage, setNMessage] = useState(0);

  const loginAction = () => {
    setAccess(true);
  };

  const logoutAction = () => {
    setAccess(false);
  };

  let optionalButton;

  if (access) {
    optionalButton = (
      <LogoutButton
        propStyle={unloggedStyle}
        logoutAccion={logoutAction}
      ></LogoutButton>
    );
  } else {
    optionalButton = (
      <LoginButton
        propStyle={loggedStyle}
        loginAction={loginAction}
      ></LoginButton>
    );
  }

  // Unread messages

  let addMessages = () => {
    setNMessage(nMessage + 1);
  };

  return (
    <div>
      {optionalButton}
      {access ? (
        <div>
          {nMessage > 0 && nMessage === 1 && (
            <p>You have {nMessage} unread...</p>
          )}
          {nMessage > 1 && <p>You have {nMessage} unread...</p>}
          {nMessage === 0 && <p>No tiene ningunmensaje para leer</p>}
          <button onClick={addMessages}>Add New Message</button>
        </div>
      ) : null}
    </div>
  );
};
export default OpcionalRender;
