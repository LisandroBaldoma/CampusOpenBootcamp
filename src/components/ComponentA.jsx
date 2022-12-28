import ComponentB from "./ComponentB";

function ComponentA() {
  class Contacto {
    constructor(nombre, apellido, email, conectado) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.conectado = conectado;
    }
  }

  const contact = new Contacto(
    "Lisandro",
    "Baldoma",
    "baldomalisandor@hotmail.com",
    true
  );

  return (
    <div>
      <ComponentB contacto={contact} />
    </div>
  );
}

export default ComponentA;
