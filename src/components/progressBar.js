import * as React from 'react'
import Filler from './Filler.js';
import './progressBar.css'



export default function ProgressBar(props) {
  console.log(props)
  const gradient = `linear-gradient(to right, #1bad01 ${props.progress}%, crimson ${props.progress}%)`
   
  return (
  
  <div className="progress-bar">
    <Filler color={props.progress}/>
  </div>
  
  )
}