import * as React from 'react'
import Form from './form.js';
import Image from './image.js';
import ProgressBar from './progressBar.js';
import {setDog, getDogs} from '../actions/getDogs.js';
import {connect} from 'react-redux';
import KeyboardHint from './keyboardHint'

class GameContainer extends React.Component {
    state = {
      accuracy: 0,
      totalLevels: 0,
      score: 0,
      number: 0,
      showPopup:false,
      correctInRow: 0
    }


    myCallback = (score, totalLevels, correctInRow) => {
      this.setState({
       score, 
       totalLevels,
       correctInRow
      }, function stateUpdateComplete() {
        this.setState({
          accuracy: this.state.score / (this.state.totalLevels / 100)
        })
    })
    }

    componentDidMount() {
      this.props.getDogs();
    }



    render() {
      {if (!this.props.dogs[0] ) return 'Loading...'}

      if (this.props.dogs[0].number === 1) {
        
        return (<div>
          <ProgressBar progress={this.state.accuracy}/>
          <KeyboardHint/>
          <h2>{this.state.correctInRow <3? 'Level 1': this.state.correctInRow >= 3 && this.state.correctInRow <6? 'Level 2' : 'Level 3'}</h2>
          <Image photo = {this.props.dogs[0].url} number={this.props.dogs[0].number}/> 
          <Form 
            options ={this.state.correctInRow < 3? [...this.props.dogs].slice(0, 3) : 
              this.state.correctInRow >= 3 && this.state.correctInRow < 6? 
              [...this.props.dogs].slice(0, 4): 
              this.props.dogs}


            updateFrame={this.props.getDogs} callbackFromParent={this.myCallback} number={this.props.dogs[0].number} correctAnswer={this.props.dogs[0].breed} />

          </div>)
      } else {
        return (<div>
          <ProgressBar progress={this.state.accuracy}/>
          <KeyboardHint/>
          <h2>{this.state.correctInRow <3? 'Level 1': this.state.correctInRow >= 3 && this.state.correctInRow <6? 'Level 2' : 'Level 3'}</h2>
          <Image photo = {this.props.dogs[0].breed} number={this.props.dogs[0].number}/> 
          <Form 
            options ={this.state.correctInRow < 3? [...this.props.dogs].slice(0, 3) : 
              this.state.correctInRow >= 3 && this.state.correctInRow < 6? 
              [...this.props.dogs].slice(0, 4): 
              this.props.dogs}


          updateFrame={this.props.getDogs} number={this.props.dogs[0].number} callbackFromParent={this.myCallback} correctAnswer={this.props.dogs[0].url } />   

          </div>)
      }
      }
 
}

const mapStateToProps = (state) => {
  return {
    dogs: state.getDog,
    selected: state.selectedOption
  }
}


export default connect(mapStateToProps, {setDog,getDogs, 
})(GameContainer)
