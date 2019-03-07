import * as React from 'react'
const filler = (props) => {
  console.log(props)

  return <div className="filler" style={{ width: `${props.color}%` }}/> 
}

export default filler;