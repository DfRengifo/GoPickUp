import React, { Component } from "react";

class Banner extends Component {
  estilo = {
    backgroundColor: "Maroon"
  };

  render() {
    return (
      <div className="container-fluid" style={this.estilo}>
        <center>
          <br />
          <img
            src="https://scontent.fbog3-1.fna.fbcdn.net/v/t1.15752-9/44308849_2275780429118551_2901403562686808064_n.jpg?_nc_cat=110&oh=4ab070fd06ed9b3c0186a68715ff962c&oe=5C3E0AC6"
            alt="GoPickUpLogo"
          />
          <hr />
        </center>
      </div>
    );
  }
}

export default Banner;
