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
                  Nuestra Compañía se exime de toda responsabilidad en <br />
                  caso de que los usuarios utilicen los servicios sin consentir <br />
                  los términos y condiciones del sitio web o aplicación móvil, <br />
                  y se reserva la facultad de tomar todas las medidas legales <br />
                  pertinentes en estos casos.
                  </p>
                </li>
                <li>
                  <p align="right">
                  "Usted", “consumidor”, "usuario", “cliente” y "su" Hace referencia <br />
                  a todas las personas que accedan a nuestro sitio web o aplicación <br />
                  móvil y realizan órdenes de bienes o servicios a través de estos <br />
                  canales o vía telefónica.
                  </p>
                </li>
                <li>
                  <p align="right">
                  "Bienes", “productos” o “pedido”,  hacen referencia a <br />
                  los bienes que pueden llegar a ser ofrecidos a través <br />
                  de nuestra plataforma día a día."Bienes", “productos” o<br />
                   “pedido”,  hacen referencia a los bienes que pueden llegar <br />
                   a ser ofrecidos a través de nuestra plataforma día a día.<br />
                  </p>
                </li>
                <li>
                  <p align="right">
                    Al hacer click en 'comprar' acepta <br />
                    los terminos aqui descritos.
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
