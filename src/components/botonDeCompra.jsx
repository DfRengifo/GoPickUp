import React, { Component } from "react";

class BotonDeCompra extends Component {
  state = {
    checkbox: 0
  };

  constructor() {
    super();
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <center>
          <form action="/action_page.php">
            <h6 style={{ color: "red", fontWeight: "bolder" }}>
              He leido y aceptado los terminos y condiciones:
            </h6>
            <input
              type="checkbox"
              onChange={this.handleCheckbox}
              name="vehicle"
              value="Bike"
            />
          </form>
          <a href="/despedida">
            <button
              style={{ width: "150px", height: "50px" }}
              className="badge m-2 md"
              disabled={this.state.checkbox === 0}
            >
              Comprar
            </button>
          </a>
          <br />
          <a href="/menu">
            <button
              style={{ width: "50px", height: "25px" }}
              className="badge m-2 sm"
            >
              Volver
            </button>
          </a>
        </center>
      </React.Fragment>
    );
  }

  handleCheckbox() {
    this.setState({ checkbox: 1 });
  }
}

export default BotonDeCompra;
