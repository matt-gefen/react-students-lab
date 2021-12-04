import React from "react";
import Score from "./Score";


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
    <div>
      {props.name}
      {/* {props.bio} */}
      {scores}
    </div>
  )
}

export default Student