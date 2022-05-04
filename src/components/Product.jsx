import React from "react";
import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <div>
      <h1>Products</h1>
      <ul>
        <li>
          <Link to={"/product/1"}>products/1</Link>
        </li>
        <li>
          <Link to={"/product/2"}>products/2</Link>
        </li>
        <li>
          <Link to={"/product/3"}>products/3</Link>
        </li>
      </ul>
    </div>
  );
};
