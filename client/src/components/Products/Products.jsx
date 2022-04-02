import { Grid } from "@mui/material";
import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import BodyStyle from "../BodyStyle/BodyStyle";
import CardItem from "../CardItem/CardItem";
//const data = require('../../products.json');


function Products() {

  let [items,setItems]=useState(null);

  useEffect(()=>{

    fetch('http://localhost:5000/items')
    .then(response=>response.json())
    .then((data)=>{
      setItems(data);
    });
  },[]);



  return (
    <>
      <BodyStyle />
      <div className="mainStyle">
        <Grid container spacing={15}>
          {items!=null && items.map((item) => (
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
