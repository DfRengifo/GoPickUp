import React, { Component } from "react";

class Despedida extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ height: "350px", background: "Gold" }}>
          <center>
            <h1 style={{ color: "#639CFF" }}>Gracias por preferir GoPickUp, vuelva pronto</h1>
            <br />
            <br />
            <br />
            <a href="/menu">
              <button className="badge bg" style={{ fontSize: 50 }}>
                Volver al Menu
              </button>
            </a>
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default Despedida;
