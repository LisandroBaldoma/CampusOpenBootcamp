import PropTypes from "prop-types";

function ComponentB(props) {
  
  if (props.contacto.conectado) {
    return (
      <div>
        <h1>Contacto en Linea</h1>
      </div>
    );
  } else {
    return (
        <div>
        <h1>Contacto No Disponible</h1>
      </div>
    );
  }
}

ComponentB.propTypes = {
  contacto: PropTypes.object,
};

export default ComponentB;
