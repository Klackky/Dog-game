import * as React from 'react'

export default class Form extends React.Component {
  state = {
    selectedOption: '',
    hintClicked: false,
    score: 0,
    totalLevels: 0,
    accuracy: 0
  }

  handleClick = (event) => {
    event.preventDefault();
    if(this.props.correctAnswer === this.state.selectedOption) {
      alert(`correct`);
      this.setState({score: this.state.score +1, totalLevels: this.state.totalLevels + 1}, function () {
        this.props.callbackFromParent(this.state.score, this.state.totalLevels)
      });
      
      this.props.updateFrame();
    } else {
      alert(`not correct! the right answer is ${this.props.correctAnswer}`)
      this.setState({score: this.state.score, totalLevels: this.state.totalLevels + 1}, function () {
        this.props.callbackFromParent(this.state.score, this.state.totalLevels)
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

  filterOptions = () => {
    return this.props.options
      .filter(this.correctAnswerOrHint)
      .map(option =>
        <label key={option.breed} className="game__answer"> {option.breed}
          <input onChange={this.handleOptionChange} name="question" type="radio" value={option.breed} />
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
   <button onClick={this.handleHint}>Hint</button>
    </div>)
  } else {
    return (<div>
      <form className="game__content"  onSubmit={this.handleClick}>
      {this.props.options.map(option => 
  
           <div className="game__option">
           <label key={option.url} className="game-answer">
           <input onChange={this.handleOptionChange} type="radio" name="answer" className="input-hidden" value = {option.url}/>
                   <img src = {option.url}  
                          alt = "dog"/>
           </label>
           </div>)}
      <button type="submit">Sumbit</button>
    </form>
      </div>)
  }

}}
