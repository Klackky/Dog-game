import * as React from 'react'
export default function breedQuestion(props) {
  console.log(`this props`,props)
  return (
  <div>
    <h1>Select the correct image of dog for the following questions </h1>

    {
     <ul>{props.photo}</ul>
    }
  </div>
  )
} 