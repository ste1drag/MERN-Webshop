import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BodyStyle from "../BodyStyle/BodyStyle";
const data = require("../../products.json");

const Product = () => {
  let { id } = useParams();
  id = Number.parseInt(id);
  console.log(data);
  let el = data.find((item) => item.id === id);
  console.log(el);
  return (
    <>
      <BodyStyle />
      <div className="mainStyle">
        <h1>{el.naziv}</h1>
        <p>{el.opis}</p>
        <br />
        <br />
        <p>{el.cena}</p>
        <button>Add to cart</button>
      </div>
    </>
  );
};

export default Product;
