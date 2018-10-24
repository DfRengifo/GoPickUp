import React, { Component } from "react";
import ResumenPedido from "./resumenPedido";
import BotonDeCompra from "./botonDeCompra";
import DecoracionCheckOut from "./decoracionCheckOut";

class Pedido extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <center>
          <h1 style={{ color: "#0000" }}>¡Gracias por tu pedido con:</h1>
        </center>
        <table>
          <tbody>
            <tr>
              <th>
                <ResumenPedido />
              </th>
              <th>
                <DecoracionCheckOut />
              </th>
            </tr>
          </tbody>
        </table>
        <br />
        <BotonDeCompra />
      </React.Fragment>
    );
  }
}

export default Pedido;
