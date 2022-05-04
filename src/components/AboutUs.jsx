import React from "react";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Gigili } from "./gigili";

export const AboutUs = (props) => {
  const parseQuery = () => {
    const res = queryString.parse(props.location.search);
    console.log(res);
  };

  const reset = () => {
    props.history.replace("/notFound");
  };
  return (
    <div>
      {props.match.params.id}
      <p>
        <Link to={"/product/gigili"}>gigili</Link>
      </p>
      <button onClick={reset}>blah</button>

      <div>
        <Route path={"/product/gigili"} element={<Gigili />} />
      </div>
    </div>
  );
};
