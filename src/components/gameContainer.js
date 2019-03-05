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
    console.log(this.props.getDog)
   {if (!this.props.getDog) return 'Loading...'}
    return (<div> 
      <Image photo={this.props.getDog}/>
      <Form />
    </div>)
  }



}

const mapStateToProps = (state) => {
  return {
    getDog: state
  }
}


export default connect(mapStateToProps, {setDog, getDogs})(GameContainer)