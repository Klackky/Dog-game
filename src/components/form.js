import * as React from 'react'
import './imageform.css'
import Popup from './PopUp.js'


export default class Form extends React.Component {
  state = {
    selectedOption: '',
    hintClicked: false,
    score: 0,
    totalLevels: 0,
    showPopup: false,
    accuracy: 0
  }

  togglePopup() {
    if(this.state.showPopup) {
      this.setState({
        showPopup: false
      }) 
    } else {
      this.setState({
        showPopup: true
      }) 
    }
  }  

  handleClick = (event) => {
    event.preventDefault();
    if(this.props.correctAnswer === this.state.selectedOption) {
      this.setState({score: this.state.score +1, totalLevels: this.state.totalLevels + 1, hintClicked: false}, function () {
        this.props.callbackFromParent(this.state.score, this.state.totalLevels)
      
      this.props.updateFrame();
    }) 
    } else {
      this.setState({score: this.state.score, totalLevels: this.state.totalLevels + 1, hintClicked:false}, function () {
        this.props.callbackFromParent(this.state.score, this.state.totalLevels)
      });
      this.togglePopup()
      setTimeout(() => {
      this.props.updateFrame()
      this.togglePopup()
      }, 2000);
    }
}


  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };
  
  handleHint = () => {
    this.setState({
      hintClicked: true
    })
   }

  correctAnswerOrHint = (option, index) =>
   !this.state.hintClicked ||
   option.breed === this.props.correctAnswer ||
   index >= 2


  correctAnswerOrHintTwo = (option, index) => 
    !this.state.hintClicked ||
    option.url === this.props.correctAnswer ||
    index >= 2

    filterOptions = () => {
      return this.props.options
        .filter(this.correctAnswerOrHint)
        .map(option =>
         <p>
            <input className="game__radio" onChange={this.handleOptionChange} name="question" type="radio" value={option.breed} id={option.breed} />
            <label for={option.breed} key={option.breed} className="game__answer" data-a="42"> {option.breed}</label>
         </p>
        )
   
    }
   
    filterOptionsTwo = () => {
     return this.props.options
     .filter(this.correctAnswerOrHintTwo)
     .map(option =>
   
   
        <label key={option.url} className="game-answer">
            <input onChange={this.handleOptionChange} type="radio" name="answer" className="input-hidden"     value = {option.url}/>
                    <img src = {option.url}
                       alt = "dog"/>
        </label>
     )
    }

  render() {
  if (this.props.number === 1) {
  return (<div>
    <form className="game__content" onSubmit={this.handleClick}>
    <div className="game__wrapper">
      <div className="game__option">
        {this.filterOptions()}
       </div>
    </div>
    <button className="game__submit" type="submit"> Submit </button>
  </form>

   <button onClick={this.handleHint}>Hint</button>

       {this.state.showPopup ? 
          <Popup
            text={this.props.correctAnswer}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
    </div>
    
    
  )
  } else {
    return (<div>
      <form className="game__content"  onSubmit={this.handleClick}>
      <div className="game__wrapper">
        <div className="game__option">
            {this.filterOptionsTwo()}
        </div>
      </div>
      <button className="game__submit" type="submit"> Submit </button>
    </form>
 <button onClick={this.handleHint}>Hint</button>
    {this.state.showPopup ? 
          <Popup
            text={this.props.correctAnswer}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
    </div>)
 }
}}
