import React, { Component } from "react";

class SignUpForm extends Component {
  state = {
    cedula: 0,
    contraseña: "",
    nombre: "",
    sexo: 0
  };

  constructor() {
    super();
    this.handleCedula = this.handleCedula.bind(this);
    this.handleNombre = this.handleNombre.bind(this);
    this.handleSexo = this.handleSexo.bind(this);
    this.handleContraseña = this.handleContraseña.bind(this);
  }

  render() {
    console.log("props1", this.props);
    return (
      <React.Fragment>
        <center>
          <form id="form">
            <h3 style={{ color: "#0c6aa0" }}>
              ¡No esperes mas para ser parte de GoPickUp!
            </h3>
            <br />
            <label style={{ fontsize: 20, fontweight: "bold" }}>
              Cedula :
              <input
                onChange={this.handleCedula}
                className="m-2"
                type="number"
                name="name"
              />
            </label>
            <br />
            <label style={{ fontsize: 15, fontweight: "bold" }}>
              Contraseña :
              <input
                onChange={this.handleContraseña}
                className="m-2"
                type="password"
                name="contraseña"
                id="contraseña"
              />
            </label>
            <br />
            <label style={{ fontsize: 15, fontweight: "bold" }}>
              Nombre Completo :
              <input
                onChange={this.handleNombre}
                className="m-2"
                type="text"
                name="nombre"
                id="nombre"
              />
            </label>
            <br />
            <label style={{ fontsize: 15, fontweight: "bold" }}>
              Genero :
              <input onChange={this.handleSexo} className="m-2" list="genero" />
              <datalist id="genero">
                <option value="Femenino" />
                <option value="Masculino" />
              </datalist>
            </label>
          </form>
          <br />
          <a href="/bienvenida">
            <button
              style={{ fontSize: 15 }}
              className="badge"
              disabled={
                this.state.contraseña === "" ||
                this.state.cedula === 0 ||
                this.state.nombre === "" ||
                this.state.sexo === 0
              }
            >
              ¡Crear Tu Cuenta!
            </button>
          </a>
          <br />
          <br />
          <br />
          <a href="/logIn">
            <button className="badge sm">Volver al Inicio</button>
          </a>
        </center>
      </React.Fragment>
    );
  }

  handleSexo() {
    console.log("props2", this.props);
    let valor = document.getElementById("form").elements[3].value;
    if (valor === "Femenino") {
      this.setState({ sexo: 2 });
    } else if (valor === "Masculino") {
      this.setState({ sexo: 1 });
    } else {
      this.setState({ sexo: 0 });
    }
  }

  handleNombre() {
    console.log("props3", this.props);
    let valorii = document.getElementById("form").elements[2].value;
    this.setState({ nombre: valorii });
  }

  handleCedula() {
    console.log("props4", this.props);
    let valoriii = document.getElementById("form").elements[0].value;
    this.setState({ cedula: valoriii });
  }

  handleContraseña() {
    console.log("props5", this.props);
    let valoriv = document.getElementById("form").elements[1].value;
    this.setState({ contraseña: valoriv });
  }
}

export default SignUpForm;
