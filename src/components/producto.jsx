import React, { Component } from "react";

class Producto extends Component {
  state = {
    demanda: 0,
    valor: 0,
    descripcion: "",
    cantidad: 0,
    imagenURL: ""
  };

  estiloDH = {
    border: "7px solid #639CFF",
    padding: "8px",
    width: "100%"
  };

  constructor() {
    super();
    this.incrementar = this.incrementar.bind(this);
    this.decrementar = this.decrementar.bind(this);
  }

  incrementar() {
    this.setState({ demanda: this.state.demanda + 1 });
    this.props.incrementarTotal(this.props.valor);
  }

  decrementar() {
    this.setState({ demanda: this.state.demanda - 1 });
    this.props.decrementarTotal(this.props.valor);
  }

  render() {
    return (
      <table style={this.estiloDH}>
        <tbody>
          <tr>
            <th
              style={{
                width: "120px",
                border: "3px solid #639CFF",
                padding: "10px",
                width :"390px",
                height : "120px"
              }}
            >
              <center>
                <img
                  src={this.props.imagenURL}
                  alt={this.state.id}
                  id={this.state.id}
                  width="100%"
                  height="100%"
                />
              </center>
            </th>
            <th
              style={{
                border: "3px solid #639CFF",
                padding: "10px"
              }}
            >
              <center>Descripcion: {this.props.descripcion}</center>
            </th>
            <th
              style={{
                width: "100px",
                border: "3px solid #639CFF",
                padding: "10px"
              }}
            >
              <center>{this.state.demanda}</center>
            </th>
            <th
              style={{
                width: "100px",
                border: "3px solid #639CFF",
                padding: "10px"
              }}
            >
              <center>{this.props.valor}$</center>
            </th>
            <th
              style={{
                width: "100px",
                border: "3px solid #639CFF",
                padding: "10px"
              }}
            >
              <center>{this.state.demanda * this.props.valor}$</center>
            </th>
            <th
              style={{
                width: "100px",
                border: "3px solid #639CFF",
                padding: "10px"
              }}
            >
              <table style={{ width: "100px" }}>
                <tbody>
                  <tr style={{ width: "100px" }}>
                    <th>
                      <center>
                        <button
                          disabled={this.state.demanda === this.props.cantidad}
                          style={{ width: "35px", height: "35px" }}
                          className="badge m-1"
                          onClick={this.incrementar}
                        >
                          +
                        </button>
                      </center>
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <center>
                        <button
                          disabled={this.state.demanda === 0}
                          style={{ width: "35px", height: "35px" }}
                          className="badge m-1"
                          onClick={this.decrementar}
                        >
                          -
                        </button>
                      </center>
                    </th>
                  </tr>
                </tbody>
              </table>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Producto;
