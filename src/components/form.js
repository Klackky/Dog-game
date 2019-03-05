import * as React from 'react'


const checkIfAnswerIsCorrect = (answer) => {
  console.log(answer);
  if(answer === 'breed') {
    alert(`heeey`);
  }
}

export default class Form extends React.Component {
   state = { selectedOption: '' }

   handleClick = (event) => {
    event.preventDefault();
    if(this.props.correctAnswer === this.state.selectedOption) {
      console.log(`correct`);
    } else {
      alert(`not correct`)
    }
  }

  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  render() {
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
