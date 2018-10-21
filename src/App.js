import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/banner";
import SubBanner from "./components/subBanner";
import LogIn from "./components/logIn";
import SignUp from "./components/signUp";
import OlvidoLaContraseña from "./components/olvidoLaContraseña";
import Despedida from "./components/despedida";
import Menu from "./components/menu";
import Pedido from "./components/pedido";
import Bienvenida from "./components/bienvenida";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ background: "Gold" }}>
        <Banner />
        <BrowserRouter>
          <div>
            <Route path="/" component={LogIn} exact />
            <Route path="/logIn" component={LogIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/olvidoLaContraseña" component={OlvidoLaContraseña} />
            <Route path="/despedida" component={Despedida} />
            <Route path="/menu" component={Menu} />
            <Route path="/pedido" component={Pedido} />
            <Route path="/bienvenida" component={Bienvenida} />
          </div>
        </BrowserRouter>
        <br />
        <SubBanner />
      </div>
    );
  }
}

export default App;
