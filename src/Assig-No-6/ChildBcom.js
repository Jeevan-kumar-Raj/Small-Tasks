import React, { useContext } from "react";
import { Moviesprovider } from "./MoviesContext";

function ChildBcom() {
  const obj = useContext(Moviesprovider);
  return (
    <div>
      <h1 style={{ backgroundColor: "brown" }}>This is Child B component</h1>
      <h1>{obj.movie}</h1>
    </div>
  );
}

export default ChildBcom;
