import * as React from 'react'


var key
export default class Form extends React.Component {
 
  state = {
    selectedOption: '',
    score: 0,
    hintClicked: false,
    checked: false,
    count : 0
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

  handleHint = () => {
    this.setState({
      hintClicked: true
    })
  }

  handleEnter() {
    this.setState({
      checked :true
    });
  }

  keyHandling = (event) => {
    console.log("Key code: " + event.keyCode);
    // if(event.keyCode === 98 ){
    //   alert(2)
    //   this.handleEnter()
    // } 
    const { options } = this.props
    switch (event.keyCode) {
      case 97: 
        return this.setState({ selectedOption: options[0].breed})
      case 98:
        return this.setState({ selectedOption: options[1].breed})
      case 99: 
        return this.setState({ selectedOption: options[2].breed})
      case 13: 
        return this.handleClick(event)
      default:
        break;
    }
  }
  
  componentDidMount=() => {
    // Add Event Listener on compenent mount
    window.addEventListener("keyup", this.keyHandling);
  }
  
  // componentWillUnmount=()=> {
  //   // Remove event listener on compenent unmount
  //   window.removeEventListener("keyup", this.keyHandling);
  // }

  correctAnswerOrHint = (option, index) =>
    !this.state.hintClicked ||
    option.breed === this.props.correctAnswer ||
    index >= 2

  filterOptions = () => {
    var  i =0;
    return this.props.options
      .filter(this.correctAnswerOrHint)
      .map(option =>
        <label key={option.breed} className="game__answer"> {option.breed}
          <input onChange={this.handleOptionChange} name="question" type="radio" value={option.breed} key ={i++}  />
        </label>
      )
  }

  render() {
    console.log(this.state)
  if (this.props.number === 1) {
  return (<div>
    <form className="game__content" onSubmit={this.handleClick} >
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
      {this.props.options.map(option => {
        console.log(option, this.state.selectedOption, 'hello')
        return (<div className="game__option">
        <label key={option.url} className="game-answer">
        <input onChange={this.handleOptionChange} 
                type="radio" name="answer" 
                className="input-hidden" 
                value = {option.url}
                checked = {option.breed === this.state.selectedOption}
          />
        <img src = {option.url}  
                alt = "dog"/>
        </label>
        
        </div>)
      })}
      <button type="submit">Sumbit</button>
    </form>
      </div>
      )
  }

}}
