import React, { Component } from "react";
import LogInBanner from "./logInBanner";
import LogInForm from "./logInForm";
import LogInDescripcion from "./logInDescripcion";

class LogIn extends Component {
  render() {
    return (
      <React.Fragment>
        <center>
          <table style={{ width: "100%", background: "#639CFF" }}>
            <tbody>
              <tr>
                <th>
                  <LogInForm />
                </th>
                <td>
                  
                </td>
                <td>
                  
                </td>
              </tr>
            </tbody>
          </table>
        </center>
      </React.Fragment>
    );
  }
}
//<LogInDescripcion />
//<LogInBanner />
export default LogIn;
