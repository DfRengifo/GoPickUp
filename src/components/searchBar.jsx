import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    return (
      <React.Fragment>
        <center>
          <form>
            <input
              className="m-3"
              type="text"
              style={{ width: "75%" }}
              placeholder="Search.."
              name="search"
            />
            <button style={{ width: "10%" }} type="submit">
              Buscar <i className="fa fa-search" />
            </button>
          </form>
        </center>
      </React.Fragment>
    );
  }
}

export default SearchBar;
