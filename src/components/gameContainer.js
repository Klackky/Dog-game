import * as React from 'react'
import Form from './form.js';
import Image from './image.js';
import * as request from 'superagent';
import {setDog, getDogs} from '../actions/getDogs.js';
import {connect} from 'react-redux';





class GameContainer extends React.Component {
    state = {}


    componentDidMount() {
      this.props.getDogs();
      // this.requestAllBreeds();
    }

    // requestAllBreeds = () => {
    //   request('https://dog.ceo/api/breeds/list/all')
    //   .then(response => Object.keys(response.body.message))
    //   .then(res => this.setState({allBreeds:res}))
    // }


    render() {
      
      {if (!this.props.dogs[0]) return 'Loading...'}
      console.log(this.props.dogs[0])
      return (<div>
        <Image photo = {this.props.dogs[0].url}/> 
        <Form options ={this.props.dogs} />  
        </div>)
      }



    }

    const mapStateToProps = (state) => {
      console.log(state.getDog)
      return {
        dogs: state.getDog
     //   breed: state.getDog.breed,
        // allBreeds:state.breeds
      }
    }


    export default connect(mapStateToProps, {setDog,getDogs})(GameContainer)