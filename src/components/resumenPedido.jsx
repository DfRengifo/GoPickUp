import React, { Component } from "react";

class ResumenPedido extends Component {
  state = {
    cliente: "Juan Pablo",
    costoTotal: 500,
    horaCreacion: "00:00",
    horaRecogida: "19:10",
    socio: "industriCarrefurIsis",
    productos: [
      { nombre: "Hamburguesa ", id: 10001 },
      { nombre: "hamburguesa ", id: 10002 },
      { nombre: "pizza", id: 10003 },
      { nombre: "Bebida", id: 10004 },
      { nombre: "servicio", id: 10005 }
    ]
  };
  render() {
    return (
      <React.Fragment>
        <div className="m-5">
          <h1>{this.state.cliente}:</h1>
          <h3>Su pedido consiste de:</h3>
          <ul>
            {this.state.productos.map(producto => (
              <li key={producto.id}>
                <h5>{producto.nombre}</h5>
              </li>
            ))}
          </ul>
          <br />
          <h5>Para ser recogido a las: {this.state.horaRecogida}</h5>
          <br />
          <h4>En: {this.state.socio}</h4>
          <br />
          <h4>Por un monto total de: {this.state.costoTotal}$</h4>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default ResumenPedido;
