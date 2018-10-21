import React, { Component } from "react";
import LogInBanner from "./logInBanner";
import LogInForm from "./logInForm";
import LogInDescripcion from "./logInDescripcion";

class LogIn extends Component {
  render() {
    return (
      <React.Fragment>
        <center>
          <table style={{ width: "100%", background: "Gold" }}>
            <tbody>
              <tr>
                <th>
                  <LogInDescripcion />
                </th>
                <td>
                  <LogInBanner />
                </td>
                <td>
                  <LogInForm />
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </React.Fragment>
    );
  }
}

export default LogIn;
