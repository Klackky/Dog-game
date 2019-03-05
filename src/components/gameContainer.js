import * as React from 'react'
import Form from './form.js';
import Image from './image.js';
import {
  setDog,
  getDogs
} from '../actions/getDogs.js';
import {
  connect
} from 'react-redux';


const breeds = ["american", "australian", "bedlington", "border", "dandie", "fox", "irish", "kerryblue", "lakeland", "norfolk", "norwich", "patterdale", "russell", "scottish", "sealyham", "silky", "tibetan", "toy", "westhighland", "wheaten", "whippet","affenpinscher", "african", "airedale", "akita", "appenzeller", "basenji", "beagle", "bluetick", "borzoi", "bouvier", "boxer", "brabancon", "briard", "bulldog","yorkshire"];



class GameContainer extends React.Component {
    state = {}



    componentDidMount() {
      this.props.getDogs();
    }



    render() {
      {if (!this.props.photo) return 'Loading...'}
      return (<div>
        <Image photo = {this.props.photo}/> 
        <Form options = {this.props.breed} />
        </div>)
      }



    }

    const mapStateToProps = (state) => {
      return {
        photo: state.getDog.url,
        breed: state.getDog.breed
      }
    }


    export default connect(mapStateToProps, {setDog,getDogs})(GameContainer)