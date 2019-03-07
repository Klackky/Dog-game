import * as React from 'react'
import './popUp.css'

const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
'((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
'(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
'(\\#[-a-z\\d_]*)?$','i'); // fragment locator
const checkIfUrl = (str) => {
  if(pattern.test(str)) {
    return true
  } else {
    return false
  }
}


export default class Popup extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div className='popup'>
        <div className='popup__inner'>
        <p className='popup__text'> Sorry, this is not correct. Correct answer is </p>
        {checkIfUrl(this.props.text) ? <img className="popup__image" src={this.props.text} alt="dog"/> : <p className='popup__correct-answer'>{this.props.text}</p>}
        </div>
      </div>
    );
  }
}

