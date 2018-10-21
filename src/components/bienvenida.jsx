import React, { Component } from "react";

class Bienvenida extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ height: "350px", background: "Gold" }}>
          <center>
            <h1 style={{ color: "Red" }}>
              ¡¡¡GRACIAS POR CREAR SU CUENTA CON NOSOTROS!!!
            </h1>
            <br />
            <br />
            <br />
            <a href="/menu">
              <button className="badge bg" style={{ fontSize: 50 }}>
                Acceder al menu
              </button>
            </a>
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default Bienvenida;
