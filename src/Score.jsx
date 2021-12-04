import React from "react";
import { ListGroup } from "react-bootstrap";

const Score = (props) => {
  return (
    <ListGroup.Item>
      <span><strong>Date: </strong>{props.date}  </span>
      <span><br></br></span>
      <span><strong>Score: </strong>{props.score}</span>
    </ListGroup.Item>
  )
}

export default Score