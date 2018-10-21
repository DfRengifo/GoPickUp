import React, { Component } from "react";

class DecoracionCheckOut extends Component {
  state = {};
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>
              <img
                src="https://scontent.fbog3-1.fna.fbcdn.net/v/t1.15752-9/44344458_489656354876257_5024179114236444672_n.png?_nc_cat=100&_nc_ht=scontent.fbog3-1.fna&oh=9366af548c00bf67c4818f7199dce6ab&oe=5C45C94B"
                alt="GoPickUpLogoG"
              />
            </th>
            <th>
              <br />
            </th>
            <th
              className="m-5"
              style={{
                alignContent: "right",
                alignItems: "right",
                alignSelf: "right"
              }}
            >
              <center>
                <h3>
                  Acuerdo Terminos y <br /> Condiciones:
                </h3>
              </center>
              <ul>
                <li>
                  <p align="right">
                    GoPickUp no se hace responsable <br />
                    de literalmente nada <br />
                    deal with it.
                  </p>
                </li>
                <li>
                  <p align="right">
                    Ocacionalmente se le cobrara el <br />
                    triple, si nos demanda le damos <br />
                    piso.{" "}
                  </p>
                </li>
                <li>
                  <p align="right">
                    No se que mas poner aca maaain <br />
                    ayuda con estachanda, ojalatodo <br />
                    sirva bien. ya estoy muuuy fuckig <br />
                    tostado.
                  </p>
                </li>
                <li>
                  <p align="right">
                    Si no sabe bolear es un fucking <br />
                    douchebag merece la muerte insta <br />
                    asdf asdf what the fuuuck <br />
                    halp
                  </p>
                </li>
                <li>
                  <p align="right">
                    Al hacer click en 'comprar' acepta <br />
                    los terminos aqui descritos, la <br />
                    incapacidad de leer no afecta las <br />
                    obligaciones legales relacionadad. <br />
                  </p>
                </li>
              </ul>
            </th>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default DecoracionCheckOut;
