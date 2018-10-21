import React, { Component } from "react";

class LogInForm extends Component {
  state = {
    identificacion: 0,
    contraseña: ""
  };

  constructor() {
    super();
    this.handleIdentificacion = this.handleIdentificacion.bind(this);
    this.handleContraseña = this.handleContraseña.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        <center>
          <form id="form">
            <h2>¡Inicia Sesion!</h2>
            <label style={{ fontsize: 20, fontweight: "bold" }}>
              Identificacion :
              <input
                onChange={this.handleIdentificacion}
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
              />
            </label>
          </form>
          <a href="/olvidoLaContraseña" style={{ color: "blue" }}>
            ¿Olvidaste tu contraseña?
          </a>
          <br />
          <br />
          <a href="/menu">
            <button
              className="badge"
              disabled={
                this.state.identificacion === 0 || this.state.contraseña === ""
              }
              height="35px"
              width="100px"
            >
              ¡Acceder a GoPickUp!
            </button>
          </a>
          <br />
          <br />
          <br />
          <h3>¿Eres nuevo en GoPickUp?</h3>
          <br />
          <a href="/signUp">
            <button style={{ fontSize: 20 }} className="badge">
              ¡Registrate!
            </button>
          </a>
        </center>
      </React.Fragment>
    );
  }

  handleIdentificacion() {
    let valor = document.getElementById("form").elements[0].value;
    this.setState({ identificacion: valor });
  }

  handleContraseña() {
    let valorii = document.getElementById("form").elements[1].value;
    this.setState({ contraseña: valorii });
  }
}

export default LogInForm;
