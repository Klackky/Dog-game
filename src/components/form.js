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
    accuracy: 0,
    correctInRow: 0

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

  
 
  keyHandling = (event) => {
  console.log("Key code: " + event.keyCode);
   console.log('imageOPtion',this.state.imageOption)

    const { options } = this.props
    const { hintClicked } = this.state

    const hintNumber = hintClicked ? 1 : 0

    if (this.props.number === 1){
    switch (event.keyCode) {
      case 97: 
        return this.setState({ selectedOption: options[0].breed})
      case 98:
        return this.setState({ selectedOption: options[1 + hintNumber].breed})
      case 99: 
        return this.setState({ selectedOption: options[2 + hintNumber].breed})
      case 100: 
        return this.setState({ selectedOption: options[3 + hintNumber].breed})
      case 101: 
        return this.setState({ selectedOption: options[4 + hintNumber].breed})
     case 102: 
        return this.setState({ selectedOption: options[5 + hintNumber].breed})

      case 13: 
        return this.handleClick(event)
        case 73: 
        return this.handleHint()
      default:
        break;
    }
    }else{
      switch (event.keyCode) {
        case 97: 
          return this.setState({ selectedOption: options[0].url})
        case 98:
          return this.setState({ selectedOption: options[1 + hintNumber].url})
        case 99: 
          return this.setState({ selectedOption: options[2 + hintNumber].url})
        case 100: 
         return this.setState({ selectedOption: options[3 + hintNumber].url})
      case 101: 
        return this.setState({ selectedOption: options[4 + hintNumber].url})
      case 102: 
        return this.setState({ selectedOption: options[5 + hintNumber].url})
  
        case 13: 
          return this.handleClick(event)
          case 73: 
          return this.handleHint()
        default:
          break;
      }
    }
  }
 
  componentDidMount=() => {
    
    window.addEventListener("keyup", this.keyHandling);
  }
 

  handleClick = (event) => {

    event.preventDefault();

   
    if(this.props.correctAnswer === this.state.selectedOption) {
      this.setState({score: this.state.score +1, totalLevels: this.state.totalLevels + 1, hintClicked: false, correctInRow: this.state.correctInRow +1}, function () {
        this.props.callbackFromParent(this.state.score, this.state.totalLevels, this.state.correctInRow)
      
      this.props.updateFrame();
    }) 
    } else {
      this.setState({score: this.state.score, totalLevels: this.state.totalLevels + 1, hintClicked:false, correctInRow: this.state.correctInRow = 0}, function () {
        this.props.callbackFromParent(this.state.score, this.state.totalLevels, this.state.correctInRow)
      });
      this.togglePopup()
      setTimeout(() => {
      this.props.updateFrame()
      this.togglePopup()
      }, 2000);
    }


}

componentDidUpdate() {
  if (this.props.time === 0) {
    console.log(`time!!`)
    this.togglePopup()
    this.setState({score: this.state.score, totalLevels: this.state.totalLevels + 1, hintClicked:false}, function () {
      this.props.callbackFromParent(this.state.score, this.state.totalLevels, this.state.time)
    });
    setTimeout(() => {
    this.props.updateFrame()
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
            <input className="game__radio"
             onChange={this.handleOptionChange} name="question"
             type="radio" 
             value={option.breed} 
             id={option.breed}
             checked = {option.breed === this.state.selectedOption} />
            <label for={option.breed} key={option.breed} className="game__answer" data-a="42"> {option.breed}</label>
         </p>
         
        )
    }
   
    filterOptionsTwo = () => {

     return this.props.options
     .filter(this.correctAnswerOrHintTwo)
     .map(option =>
   
   
        <label key={option.url} className="game-answer" >
        
            <input onChange={this.handleOptionChange}
           
             type="radio" name="answer"
             className="input-hidden"    
              value = {option.url}
              checked = {option.url === this.state.selectedOption}/>
                    <img src = {option.url}
                       alt = "dog"/>
        </label>
     )
    }
  
  render() {
    console.log(this.props.time)
  if (this.props.number === 1) {
  return (<div>
     <button onClick={this.handleHint} className="game__hint">Hint</button>
    <form className="game__content" onSubmit={this.handleClick}>
    <div className="game__wrapper">
      <div className="game__option">
     
        {this.filterOptions()}
        
       </div>
    </div>
    <button className="game__submit" type="submit"> Submit </button>
  </form>

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
      <button onClick={this.handleHint} className="game__hint">Hint</button>
      <form className="game__content"  onSubmit={this.handleClick}>
      <div className="game__wrapper">
        <div className="game__option">
            {this.filterOptionsTwo()}
        </div>
      </div>
      <button className="game__submit" type="submit"> Submit </button>
    </form>
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
