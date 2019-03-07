import * as React from 'react'
import Filler from './Filler.js';
import './progressBar.css'



export default function ProgressBar(props) { 
  return (<div>
  
  <div className="progress-bar">
    <Filler color={props.progress}/>
  </div>
   <p className="progress-bar__success-rate"> Your current success rate is {Math.floor(props.progress)}% </p>
  </div>
  )
}