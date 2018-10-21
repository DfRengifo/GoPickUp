import React, { Component } from "react";
import SignUpForm from "./signUpForm";
import SignUpDescripcion from "./signUpDescripcion";

class SignUp extends Component {
  render() {
    return (
      <React.Fragment>
        <center>
          <table style={{ width: "100%", background: "Gold" }}>
            <tr>
              <th>
                <SignUpDescripcion />
              </th>
              <td>
                <SignUpForm />
              </td>
              <td>
                <img
                  src="https://scontent.fbog3-1.fna.fbcdn.net/v/t1.15752-9/44344458_489656354876257_5024179114236444672_n.png?_nc_cat=100&_nc_ht=scontent.fbog3-1.fna&oh=9366af548c00bf67c4818f7199dce6ab&oe=5C45C94B"
                  alt="GoPickUpLogoG"
                  height="225"
                  width="300"
                />
              </td>
            </tr>
          </table>
        </center>
      </React.Fragment>
    );
  }
}

export default SignUp;
