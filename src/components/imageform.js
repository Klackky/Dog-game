import * as React from 'react'
import './css/imageform.css'
export default class Form extends React.Component {
    state = { 
      selectedOption: '',
      score: 0
    }
    handleClick = (event) => {
        console.log(this.props)
        event.preventDefault();
        if(this.props.correctAnswer === this.state.selectedOption) {
          alert(`correct`);
          this.setState({score: this.state.score + 1})
        } else {

            alert(`not correct` )
        }
        setTimeout(function(){window.location.reload()},2000)
    }
      

      handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value
        })
      
      console.log("SELECTED OPTION ", this.state.selectedOption)  
      }
  render(){
  return (<div>
      
    <form className="game__content"  onSubmit={this.handleClick}>
    {this.props.options.map(option => 

         <div className="game__option">
          <label key={option.url} className="game-answer">
         <input onChange={this.handleOptionChange} type="radio" name="answer" className="input-hidden" value = {option.url}/>
                 <img src = {option.url}  
                        alt = "dog image"/>
         </label>
         </div>)}
    
    
    <button type="submit">Sumbit</button>
  </form>
    </div>
  )

}
}
