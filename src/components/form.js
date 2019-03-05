import * as React from 'react'

export default function form(props) {
  return (<div>
    <form className="game__content" action="">
    <div className="game__option">
      <label className="game__answer">
        <input name="question" type="radio" value="1"/>
      </label>
      <label className="game__answer"> {props.options}
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
