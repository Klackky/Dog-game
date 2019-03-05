import * as React from 'react'
import Form from './form.js';
import Image from './image.js';
import {setDog, getDogs} from '../actions/getDogs.js';
import {connect} from 'react-redux';


class GameContainer extends React.Component {
   state = {}


    componentDidMount() {
      this.props.getDogs();
    }


    render() {
      
      {if (!this.props.dogs[0]) return 'Loading...'}
      console.log(this.props.dogs[0])
      return (<div>
        <Image photo = {this.props.dogs[0].url}/> 
        <Form options ={this.props.dogs} updateFrame={this.props.getDogs} correctAnswer={this.props.dogs[0].breed} />  
        </div>)
      }
    }

    const mapStateToProps = (state) => {
      console.log(state.getDog)
      return {
        dogs: state.getDog,
        selected: state.selectedOption
      }
    }


export default connect(mapStateToProps, {setDog,getDogs})(GameContainer)