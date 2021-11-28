import React, { useContext } from "react";
import { Moviesprovider } from "./MoviesContext";

function ChildAcom() {
  const obj = useContext(Moviesprovider);
  return (
    <div>
      <h1 style={{ backgroundColor: "green" }}>This is A Child component</h1>
      <h1>{obj.director}</h1>
    </div>
  );
}

export default ChildAcom;
