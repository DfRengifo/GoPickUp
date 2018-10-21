import React, { Component } from "react";
import OlvidoLaContraseñaForm from "./olvidoLaContraseñaForm";

class OlvidoLaContraseña extends Component {
  render() {
    return (
      <div style={{ background: "Gold" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th>
                <img
                  src="https://scontent.fbog3-1.fna.fbcdn.net/v/t1.15752-9/44344471_273477879965556_3527406453511946240_n.png?_nc_cat=104&_nc_ht=scontent.fbog3-1.fna&oh=b3e7bed12fb7e150e1508a9000631c64&oe=5C5DE73C"
                  alt="Cat1"
                />
              </th>
              <th>
                <OlvidoLaContraseñaForm />{" "}
              </th>
              <th>
                <img
                  src="https://scontent.fbog3-1.fna.fbcdn.net/v/t1.15752-9/44279923_258677624835698_6716377945184665600_n.png?_nc_cat=109&_nc_ht=scontent.fbog3-1.fna&oh=f0043e6a132c5caf35f1a3ce6d0ed818&oe=5C5C33A4"
                  alt="Cat2"
                />
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OlvidoLaContraseña;
