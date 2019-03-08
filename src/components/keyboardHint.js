import * as React from 'react'
import './keyboardHint.css'
export default class KeyboardHint extends React.Component {

render(){
    return(
        <div class = 'keyboard-box'>
        <div className ="keyboard-hint">
        <h4>Instruction for playing</h4>
        <p>The game is of three levels </p>
        <p>successfull completion of each level leads to the next level </p>
        <p>if any of the Answers were wrong. leads to the Level 1 </p>
        <h4>Keyboard Hint</h4>
        <p> Press 1 for option 1</p>
        <p> Press 2 for option 2</p>
        <p> Press 3 for option 3 <b> soon</b></p>
        <p> Press i for option Hint</p>
        <p> Press Enter for submit</p>
        </div>
        </div>
    )

    
  
}

}