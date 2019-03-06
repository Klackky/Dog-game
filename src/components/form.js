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
      console.log(this.state.score);
    } else {
      alert(`not correct`)
    }
    this.props.updateFrame();
  }

  


  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
    console.log(this.state.score)
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
    </div>
  )
}

}
