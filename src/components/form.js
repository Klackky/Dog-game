import * as React from 'react'

export default class Form extends React.Component {
  state = {
    selectedOption: '',
    score: 0,
    hintClicked: false
  }

    handleClick = (event) => {
      event.preventDefault() 
   
    if(this.props.correctAnswer === this.state.selectedOption) {
      alert(`correct`);
      this.setState({score: this.state.score +1, hintClicked: false
      }, function () {
        this.props.callbackFromParent(this.state.score)
      });
      
      this.props.updateFrame();
    } else {
      alert(`not correct! the right answer is ${this.props.correctAnswer}`)
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
        <label key={option.breed} className="game__answer"> {option.breed}
          <input onChange={this.handleOptionChange} name="question" type="radio" value={option.breed} />
        </label>
      ) 
     
  }

  filterOptionsTwo = () => {
   return this.props.options
   .filter(this.correctAnswerOrHintTwo)
   .map(option => 
  

       <label key={option.url} className="game-answer">
      <input onChange={this.handleOptionChange} type="radio" name="answer" className="input-hidden" value = {option.url}/>
              <img src = {option.url}  
                     alt = "dog"/>
      </label>
   )
  }

  render() {
  if (this.props.number === 1) {
  return (<div>
    <form className="game__content" onSubmit={this.handleClick}>
    <div className="game__option">
          {this.filterOptions()}
    </div>
    <button type="submit"> Submit </button>
  </form>
   <button onKeyDown = {this.handleHint}
  onClick={this.handleHint}
   >Hint</button>
    </div>)
  } else {
    return (<div>
      <form className="game__content"  onSubmit={this.handleClick}>
      <div className="game__option">
      {this.filterOptionsTwo()}
      </div>
      <button type="submit">Sumbit</button>
    </form>
    <button onClick={this.handleHint}>Hint</button>

      </div>)
  }

}}
