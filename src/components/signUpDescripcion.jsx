import React, { Component } from "react";

class SignUpDescripcion extends Component {
  state = {
    testimonios: [
      "Diego: 'Que buen servicio'",
      "Laura: 'Mi vida cambio con GoPickUp'",
      "Kevin: 'Esto es dinamita pura'"
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
