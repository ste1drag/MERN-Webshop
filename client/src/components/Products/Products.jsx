import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BodyStyle from "../BodyStyle/BodyStyle";
import CardItem from "../CardItem/CardItem";
const data = require('../../products.json');


function Products() {

  return (
    <>
      <BodyStyle />
      <div className="mainStyle">
        <Grid container spacing={15}>
          {data.map((item) => (
            <Grid item key={item.id}>
              <Link to={"/product/"+item.id}>
                <CardItem
                  name={item.naziv}
                  desc={item.opis}
                  price={item.cena}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Products;
