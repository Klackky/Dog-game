import * as React from 'react'
import Form from './form.js';
import Image from './image.js';
import {setDog, getDogs} from '../actions/getDogs.js';
import {connect} from 'react-redux';


class GameContainer extends React.Component {
    state = {
      score: 0,
      number: 0
    }


    componentDidMount() {
      this.props.getDogs();
    }

    myCallback = (dataFromChild) => {
      this.setState({
        score: dataFromChild
      })
    }


    render() {
      
      {if (!this.props.dogs[0]) return 'Loading...'}
      
      if (this.props.dogs[0].number === 1) {
        return (<div>
          <Image photo = {this.props.dogs[0].url} number={this.props.dogs[0].number}/> 
          <Form options ={this.props.dogs} updateFrame={this.props.getDogs} callbackFromParent={this.myCallback} number={this.props.dogs[0].number} correctAnswer={this.props.dogs[0].breed} />  
          </div>)
      } else {
        return (<div>
          <Image photo = {this.props.dogs[0].breed} number={this.props.dogs[0].number}/> 
          <Form options ={this.props.dogs}  number={this.props.dogs[0].number}updateFrame={this.props.getDogs} callbackFromParent={this.myCallback} correctAnswer={this.props.dogs[0].url } />   
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


export default connect(mapStateToProps, {setDog,getDogs})(GameContainer)