import React, { Component } from "react";
import Producto from "./producto";

class list extends Component {
  state = {
    costoTotal: 0,
    cantidadTotal: 0,
    totalPrice: 0,
    productos: [
      {
        demanda: 0,
        valor: 100,
        descripcion: "la saludable y recomendable por todos los comensales",
        cantidad: 5,
        id: 10001,
        imagenURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPuOGdLAwZhN-oRG7SpGYirCBAuT1Vo0VMtK6PHq0Rhr3Q-IdPLQ"
      },
      {
        demanda: 0,
        valor: 200,
        descripcion: "perro no tengo ni idea que esta esta vuelta...",
        cantidad: 7,
        id: 10002,
        imagenURL:
          "https://cdnblog.mexicodestinos.com/blog/wp-content/uploads/2012/06/comida-mexicana.jpg"
      },
      {
        demanda: 0,
        valor: 100,
        descripcion: "creo que eso era un sanduche?",
        cantidad: 2,
        id: 10003,
        imagenURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDpG6u6fEnvve1DFYC6raS75SRtZvjbKrG_jqAnccgP7Kc3RF2"
      },
      {
        demanda: 0,
        valor: 500,
        descripcion: "Una vaina ahi de disney ree wtf",
        cantidad: 5,
        id: 10004,
        imagenURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMtGoc9xUq-93dVbTJboxbZtG1bl5jr3Ugyn-bCEoaKsFxBQ9apQ"
      },
      {
        demanda: 0,
        valor: 450,
        descripcion: "Ole Chihiro",
        cantidad: 10,
        id: 10005,
        imagenURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLM7fHGRBwHhJiZ_7KJTO-IQGxDD64sD01ZV9FbKwwGqYpk8OX3Q"
      },
      {
        demanda: 0,
        valor: 1000,
        descripcion: "Hi.",
        cantidad: 10,
        id: 10006,
        imagenURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQANGdUO20oMfqaEEkj9Dc-9raik9J0ufA-qQ-ZGJSGE3kqBuAL"
      }
    ]
  };

  estiloDHH = {
    border: "7px solid #db0404",
    padding: "8px",
    width: "100%",
    background: "Maroon",
    fontSize: "15",
    fontWeight: "bold",
    color: "Gold"
  };

  constructor() {
    super();
    this.checkProductos = this.checkProductos.bind(this);
    this.incrementarTotal = this.incrementarTotal.bind(this);
    this.decrementarTotal = this.decrementarTotal.bind(this);
  }

  incrementarTotal(e) {
    if (this.state.cantidadTotal === 0) {
      this.props.handleAvailable(1);
    }
    this.setState({ costoTotal: this.state.costoTotal + e });
    this.setState({ cantidadTotal: this.state.cantidadTotal + 1 });
  }

  decrementarTotal(e) {
    if (this.state.cantidadTotal === 1) {
      this.props.handleAvailable(0);
    }
    this.setState({ costoTotal: this.state.costoTotal - e });
    this.setState({ cantidadTotal: this.state.cantidadTotal - 1 });
  }

  render() {
    return <div>{this.checkProductos()}</div>;
  }

  checkProductos() {
    if (this.state.productos.length === 0)
      return <h1>¡¡¡NoHayProductos Para Mostrar!!!</h1>;
    return (
      <React.Fragment>
        <table style={this.estiloDHH}>
          <tbody>
            <tr>
              <th
                style={{
                  width: "50%",
                  border: "3px solid #db0404",
                  padding: "10px"
                }}
              >
                <center>
                  <p>Numero de objetos: {this.state.cantidadTotal}</p>
                </center>
              </th>
              <th
                style={{
                  width: "50%",
                  border: "3px solid #db0404",
                  padding: "10px"
                }}
              >
                <center>
                  <p>Costo total: {this.state.costoTotal}$</p>
                </center>
              </th>
            </tr>
          </tbody>
        </table>
        <table style={this.estiloDHH}>
          <tbody>
            <tr>
              <th
                style={{
                  width: "125px",
                  border: "3px solid #db0404",
                  padding: "10px"
                }}
              >
                <center>
                  <center>
                    <p
                      style={{
                        fontSize: "15",
                        fontWeight: "bold"
                      }}
                    >
                      Imagen
                    </p>
                  </center>
                </center>
              </th>
              <th
                style={{
                  border: "3px solid #db0404",
                  padding: "10px"
                }}
              >
                <center>
                  <p
                    style={{
                      fontSize: "15",
                      fontWeight: "bold"
                    }}
                  >
                    Descripcion
                  </p>
                </center>
              </th>
              <th
                style={{
                  width: "100px",
                  border: "3px solid #db0404",
                  padding: "10px"
                }}
              >
                <center>
                  <p
                    style={{
                      fontSize: "15",
                      fontWeight: "bold"
                    }}
                  >
                    Demanda
                  </p>
                </center>
              </th>
              <th
                style={{
                  width: "100px",
                  border: "3px solid #db0404",
                  padding: "10px"
                }}
              >
                <center>
                  <p
                    style={{
                      fontSize: "15",
                      fontWeight: "bold"
                    }}
                  >
                    Precio
                  </p>
                </center>
              </th>
              <th
                style={{
                  width: "100px",
                  border: "3px solid #db0404",
                  padding: "10px"
                }}
              >
                <center>
                  <p
                    style={{
                      fontSize: "15",
                      fontWeight: "bold"
                    }}
                  >
                    Total
                  </p>
                </center>
              </th>
              <th
                style={{
                  width: "125px",
                  border: "3px solid #db0404",
                  padding: "10px"
                }}
              >
                <center>
                  <p
                    style={{
                      fontSize: "15",
                      fontWeight: "bold"
                    }}
                  >
                    Comprar
                  </p>
                </center>
              </th>
            </tr>
          </tbody>
        </table>
        {this.state.productos.map(producto => (
          <Producto
            key={producto.id}
            demanda={producto.demanda}
            valor={producto.valor}
            cantidad={producto.cantidad}
            descripcion={producto.descripcion}
            imagenURL={producto.imagenURL}
            incrementarTotal={this.incrementarTotal}
            decrementarTotal={this.decrementarTotal}
            selected={true}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default list;
