import React, { Component } from "react";

class OlvidoLaContraseñaForm extends Component {
  state = {
    reestablecer: null
  };

  constructor() {
    super();
    this.handleSend = this.handleSend.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <center>
        <form id="form">
          <h2>¿No recuerdas tu contraseña?</h2>
          <br />
          <br />
          <label style={{ fontsize: 20, fontweight: "bold" }}>
            Celular :
            <input
              name="celularInfo"
              onChange={this.handleChange}
              className="m-2"
              maxsize="10"
              type="number"
              name="celularr"
              id="celular"
            />
          </label>
        </form>
        <br />
        <button
          onClick={this.handleSend}
          className="badge bg"
          style={{ fontSize: 15 }}
        >
          Send
        </button>
        <br />
        <br />
        <br />
        <br />
        <a href="/logIn">
          <button className="badge bg" style={{ fontSize: 20 }}>
            Volver al Inicio
          </button>
        </a>
      </center>
    );
  }

  handleSend() {
    alert(
      "se envia el reestablecimiento de contraseña a: " +
        this.state.reestablecer
    );
  }

  handleChange() {
    let valor = document.getElementById("form").elements[0].value;
    this.setState({ reestablecer: valor });
  }
}

export default OlvidoLaContraseñaForm;
