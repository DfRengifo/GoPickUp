import React, { Component } from "react";

class SeleccionDeModalidadesDeBusqueda extends Component {
  state = {
    sePuedeComprar: 0,
    imagenURL:
      "https://scontent.fbog3-1.fna.fbcdn.net/v/t1.15752-9/44583388_502849373459108_6820996386373238784_n.png?_nc_cat=108&_nc_ht=scontent.fbog3-1.fna&oh=8661ad7088e766ee0aa00a8a6538a1e8&oe=5C4AC839"
  };
  constructor() {
    super();
    this.handleImagen = this.handleImagen.bind(this);
  }

  render() {
    return (
      <div className="btn-group" style={{ width: "100%", height: "50px" }}>
        <a href="/logIn">
          <button style={{ width: "75px", height: "50px" }}>Volver</button>
        </a>
        <button style={{ width: "25%" }}>Ver Productos</button>
        <button style={{ width: "25%" }}>Frecuentes</button>
        <button style={{ width: "25%" }}>Recomendados</button>
        <button style={{ width: "25%" }}>Sorprendeme</button>
        <a href="/pedido">
          <button
            disabled={this.state.sePuedeComprar === 0}
            style={{ width: "100px", height: "50px", fontWeight: "bold" }}
          >
            Checkout
          </button>
        </a>
      </div>
    );
  }

  handleImagen() {
    console.log("lol");
    if (this.props.available === 0) {
      this.setState({
        sePuedeComprar: 1
      });
    } else {
      this.setState({
        sePuedeComprar: 0
      });
    }
  }
}

export default SeleccionDeModalidadesDeBusqueda;
