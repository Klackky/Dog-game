import * as React from 'react'
import './image.css';
export default function ImagePage(props) {
  console.log(`this props`,props)
  if (props.number === 1) {
  return (
  <div className="game__image-container">
    <h1 className="game__header">What breed is it?</h1>

    {
     <img className="game__image" src={props.photo} alt={'a dog'}></img>
    }
  </div>
  )
} else {
  return (
    <div>
      <h1 className="game__header">Select the correct image of dog for the following breed </h1>
  
      {
       <p className="game__question">{props.photo}</p>
      }
    </div>
    )
}
} 