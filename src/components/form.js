import * as React from 'react'

export default function form(props) {
  console.log(props)
  return (<div>
    <form className="game__content" action="">
    <div className="game__option">
    {props.options.map(option => 
    
     <label key={option.breed} className="game__answer"> {option.breed}
     <input name="question" type="radio" value="1"/>
   </label>
    )}
    </div>
    <button type="submit">Sumbit</button>
  </form>
    </div>
  )

}
