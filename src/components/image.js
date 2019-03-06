import * as React from 'react'
export default function ImagePage(props) {
  console.log(`this props`,props)
  if (props.number === 1) {
  return (
  <div>
    <h1>Photos in this album</h1>

    {
     <img src={props.photo} alt={'a dog'}></img>
    }
  </div>
  )
} else {
  return (
    <div>
      <h1>Select the correct image of dog for the following questions </h1>
  
      {
       <ul>{props.photo}</ul>
      }
    </div>
    )
}
} 