import React from "react";
import Score from "./Score";
import {Card, ListGroup, CardGroup} from 'react-bootstrap'


const Student = (props) => {
  const scores = props.scores.map((element, index) => {
    return(
      <Score
        date = {element.date}
        score = {element.score}
        key = {index}
      />
    )
  })


  return (
    <>
      <CardGroup>
      <Card style={{width: '25rem'}} border="secondary">
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.bio}</Card.Text>
      </Card.Body>
    <ListGroup variant="flush">
      {scores}
    </ListGroup>
    </Card>
    </CardGroup>
    </>
  )
}

export default Student