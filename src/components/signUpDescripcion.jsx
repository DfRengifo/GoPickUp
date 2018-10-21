import React, { Component } from "react";

class SignUpDescripcion extends Component {
  state = {
    testimonios: [
      "Juancho: 'Que servicio tan brutal'",
      "Pepe: 'Mi vida cambio con GoPickUp'",
      "ElCumpa: 'Parce me dieron el triple'",
      "Gary: lol"
    ]
  };
  render() {
    return (
      <React.Fragment>
        <center>
          <p>
            {this.state.testimonios[0]}
            <br />
            <br />
            {this.state.testimonios[1]} <br />
            <br />
            {this.state.testimonios[2]}
            <br />
            <br /> {this.state.testimonios[3]}
          </p>
        </center>
      </React.Fragment>
    );
  }
}

export default SignUpDescripcion;
