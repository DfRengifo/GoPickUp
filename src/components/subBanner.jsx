import React, { Component } from "react";

class SubBanner extends Component {
  state = {
    celular: 3206517930,
    telefono: 6666666,
    mail: "df.rengifo@uniandes.edu.co",
    facebookURL: "https://www.facebook.com",
    twitterURL: "https://www.twitter.com"
  };

  estilo = {
    color: "Gold"
  };

  ul = {
    listStyle: "none"
  };

  render() {
    return (
      <React.Fragment>
        <table style={{ width: "100%", background: "#066196" }}>
          <tbody>
            <tr>
              <th>
                <ul style={{ width: "100%", listStyle: "none" }}>
                  <li>
                    <h6 style={this.estilo}>telefono: {this.state.telefono}</h6>
                  </li>
                  <li>
                    <h6 style={this.estilo}>Celular: {this.state.celular}</h6>
                  </li>
                </ul>
              </th>
              <td>
                <ul style={{ width: "100%", listStyle: "none" }}>
                  <li>
                    <center>
                      <h6 style={this.estilo}>e-mail: {this.state.mail}</h6>
                    </center>
                  </li>
                </ul>
              </td>
              <td>
                <ul style={{ width: "100%", listStyle: "none" }}>
                  <li>
                    <h6 style={this.estilo}>¡¡¡Siganos en Redes Sociales!!!</h6>
                  </li>
                  <li>
                    <a href={this.state.facebookURL}>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png"
                        width="25"
                        height="25"
                        title="Facebook"
                        alt="Facebook"
                      />
                    </a>
                  </li>
                  <li>
                    <a href={this.state.twitterURL}>
                      <img
                        src="data:image/png;base64,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"
                        width="25"
                        height="25"
                        title="Facebook"
                        alt="Facebook"
                      />
                    </a>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default SubBanner;
