import React from "react";
import { Card} from "react-bootstrap";

function CardItem(props) {
  const cartOnClick = (e) => {
    e.preventDefault();
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="logo192.png" />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.desc}</Card.Text>
        <br />
        <br />
        <p style={{ textAlign: "right" }}>{props.price}</p>
      </Card.Body>
    </Card>
  );
}

export default CardItem;
