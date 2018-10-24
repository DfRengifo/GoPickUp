import React, { Component } from "react";
import Producto from "./producto";

class list extends Component {
  style = {
    width: "390px"
  }

  state = {
    costoTotal: 0,
    cantidadTotal: 0,
    totalPrice: 0,
    productos: [
      {
        demanda: 0,
        valor: 100,
        descripcion: "Alimento en forma de la de bocadillo hecho a base de carne picada aglutinada en forma de filete, cocinado a la parrilla ",
        cantidad: 5,
        id: 10001,
        imagenURL:
          "https://static7.depositphotos.com/1011415/743/v/450/depositphotos_7438540-stock-illustration-cheeseburger.jpg"
      },
      {
        demanda: 0,
        valor: 200,
        descripcion: "Deliciosa salchicha bañada en salsas con papas acompañado del pan de la casa",
        cantidad: 7,
        id: 10002,
        imagenURL:
          "https://previews.123rf.com/images/ylivdesign/ylivdesign1707/ylivdesign170732380/83066391-icono-de-hotdog-ilustraci%C3%B3n-de-dibujos-animados-de-icono-de-vector-de-hot-dog-para-web.jpg"
      },
      {
        demanda: 0,
        valor: 100,
        descripcion: "Pechuga de pollo, sobre un exquisito pan, acompañado de condimentos y guarniciones. ",
        cantidad: 2,
        id: 10003,
        imagenURL:
          "https://www.svgrepo.com/show/21407/sandwich.svg"
      },
      {
        demanda: 0,
        valor: 500,
        descripcion: "Deliciosas tortillas de maiz fritas acompañadas de queso deretido y jalapeños",
        cantidad: 5,
        id: 10004,
        imagenURL:
          "https://mbtskoudsalg.com/images/nachos-cartoon-png-7.png"
      },
      {
        demanda: 0,
        valor: 450,
        descripcion: "Ricos rollos de arroz relleno de pescado en gran variedad traidos desde japon",
        cantidad: 10,
        id: 10005,
        imagenURL:
          "https://s3.envato.com/files/142082240/Sushi_Vector_preview.jpg"
      }
    ]
  };

  estiloDHH = {
    border: "7px solid #639CFF",
    padding: "8px",
    width: "100%",
    fontSize: "15",
    fontWeight: "bold"
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
      return <h1>¡¡¡No Hay Productos Para Mostrar!!!</h1>;
    return (
      <React.Fragment>
        <table style={this.estiloDHH}>
          <tbody>
            <tr>
              <th
                style={{
                  width: "50%",
                  border: "3px solid #639CFF",
                  padding: "10px",
                  background: "#97C5FF"

                }}
              >
                <center>
                  <p>Numero de objetos: {this.state.cantidadTotal}</p>
                </center>
              </th>
              <th
                style={{
                  width: "50%",
                  border: "3px solid #639CFF",
                  padding: "10px",
                  background: "#97C5FF"
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
                  width: "390px",
                  border: "3px solid #639CFF",
                  padding: "10px",
                  background: "#97C5FF"
                }}
              >
                <center>
                  <center>
                    <p
                      style={{
                        width: "390px",
                        fontSize: "15",
                        fontWeight: "bold"
                      }}
                    >
                    
                    </p>
                  </center>
                </center>
              </th>
              <th
                style={{
                  border: "3px solid #639CFF",
                  padding: "10px",
                  background: "#97C5FF"
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
                  border: "3px solid #639CFF",
                  padding: "10px",
                  background: "#97C5FF"
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
                  border: "3px solid #639CFF",
                  padding: "10px",
                  background: "#97C5FF"
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
                  border: "3px solid #639CFF",
                  padding: "10px",
                  background: "#97C5FF"
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
                  border: "3px solid #639CFF",
                  padding: "10px",
                  background: "#97C5FF"
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
