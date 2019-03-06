import * as React from 'react'


export default class Form extends React.Component {
   state = { 
     selectedOption: '',
     score: 0
   }

   handleClick = (event) => {
    event.preventDefault();
    if(this.props.correctAnswer === this.state.selectedOption) {
      alert(`correct`);
      this.setState({score: this.state.score +1}, function () {
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


  render() {
  if (this.props.number === 1) {
  return (<div>
    <form className="game__content" onSubmit={this.handleClick}>
    <div className="game__option">
    {this.props.options.map(option => 
    
     <label key={option.breed} className="game__answer"> {option.breed}
     <input onChange={this.handleOptionChange} name="question" type="radio" value={option.breed}/>
   </label>
    )}
    </div>
    <button type="submit"> Submit </button>
  </form>
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
