import * as React from 'react'
import Filler from './Filler.js';
import './progressBar.css'



export default function ProgressBar(props) { 
  return (
  
  <div className="progress-bar">
    <Filler color={props.progress}/>
  </div>
  
  )
}