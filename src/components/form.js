import * as React from 'react'
import {connect} from 'react-redux';

class Form extends React.Component {

  render() {
  return (<div>
    <form className="game__content" action="">
    <div className="game__option">
      <label className="game__answer">
        <input name="question" type="radio" value="1"/>
      </label>
      <label className="game__answer">
        <input name="question" type="radio" value="2t"/>
      </label>
      <label className="game__answer">
        <input name="question" type="radio" value="3"/>
      </label>
    </div>
    <button type="submit">Sumbit</button>
  </form>
    </div>
  )
}

}

export default Form;