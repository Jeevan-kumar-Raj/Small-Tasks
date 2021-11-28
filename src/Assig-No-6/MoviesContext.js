import React, { Component } from "react";

export const Moviesprovider = React.createContext();

export default class MoviesContext extends Component {
  constructor() {
    super();
    this.state = {
      director: "Christopher Nplan",
      movie: "Intestellar",
    };
  }
  render() {
    return (
      <Moviesprovider.Provider value={{ ...this.state }}>
        {this.props.children}
      </Moviesprovider.Provider>
    );
  }
}
