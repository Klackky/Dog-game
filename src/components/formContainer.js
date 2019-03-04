import * as React from 'react'
import Form from './form.js';
import {setDog, getDogs} from '../actions/getDogs.js';
import {connect} from 'react-redux';
import * as request from 'superagent';

class FormContainer extends React.Component {
  state = {}
 


componentDidMount() {
  console.log('FormContainer componentDidMount this.props test:', this.props)

  this.props.getDogs();

}

  

  render() {
    return (<div> 
      <Form />
    </div>)
  }



}

const mapStateToProps = (state) => {
  return {
    getDog: state.dog
  }
}


export default connect(mapStateToProps, {setDog, getDogs})(FormContainer)