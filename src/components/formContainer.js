import * as React from 'react'
import Form from './form.js';
import * as request from 'superagent';
import {connect} from 'react-redux';

export default class AlbumsListContainer extends React.Component {
  state = {}


componentDidMount() {
  request
    .get('https://dog.ceo/api/breeds/image/random')
    .then(response => console.log(response.body.message))
    .catch(console.error)
}
  

  

  render() {
    return (<div> 
      <Form />
    </div>)
  }



}
