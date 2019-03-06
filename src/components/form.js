import * as React from 'react'
import {connect} from 'react-redux';

const checkIfAnswerIsCorrect = (answer) => {
  console.log(answer);
  if (answer === 'breed') {
    alert(`heeey`);
  }
}

export default class Form extends React.Component {
  state = {
    selectedOption: '',
    hintClicked: false
  }

  handleClick = (event) => {
    event.preventDefault();
    if (this.props.correctAnswer === this.state.selectedOption) {
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



    return (<div>
      <form className="game__content" onSubmit={this.handleClick}>
        <div className="game__option">

          {this.filterOptions()}
        </div>
        <button type="submit"> Submit </button>
      </form>
      <button onClick={this.handleHint}>Hint</button>

    </div>
    )
  }

}

