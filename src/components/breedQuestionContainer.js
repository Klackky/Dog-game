import * as React from 'react'
import ImageForm from './imageform';
import BreedQuestion from './breedQuestion';
import * as request from 'superagent';
import {setDog, getDogs} from '../actions/getDogs.js';
import {connect} from 'react-redux';





class BreedQuestionContainer extends React.Component {
    state = {}


    componentDidMount() {
      this.props.getDogs();
    }

   


    render() {
      
      {if (!this.props.dogs[0]) return 'Loading...'}
      console.log(this.props.dogs[0])
      return (<div>
    

        <BreedQuestion photo = {this.props.dogs[0].breed} /> 

        <ImageForm options ={this.props.dogs}  correctAnswer={this.props.dogs[0].url} />   
       

        </div>)
      }



    }

    const mapStateToProps = (state) => {
      return {
        dogs: state.getDog,
        selected: state.selectedOption
      }
    }


    export default connect(mapStateToProps, {setDog,getDogs})(BreedQuestionContainer)