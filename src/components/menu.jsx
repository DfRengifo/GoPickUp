import React, { Component } from "react";
import List from "./list";
import SeleccionDeModalidadesDeBusqueda from "./seleccionDeModalidadesDeBusqueda";
import SearchBar from "./searchBar";

class Menu extends Component {
  state = {
    available: 0
  };

  constructor() {
    super();
    this.handleAvailable = this.handleAvailable.bind(this);
    this.child = React.createRef();
  }

  render() {
    return (
      <React.Fragment>
        <div style={{ background: "#97C5FF" }}>
          <SeleccionDeModalidadesDeBusqueda
            ref={this.child}
            available={this.state.available}
          />
          <br />
          <SearchBar />
          <List handleAvailable={this.handleAvailable} />
        </div>
      </React.Fragment>
    );
  }

  handleAvailable(e) {
    this.setState({ available: e });
    this.child.current.handleImagen();
  }
}

export default Menu;
