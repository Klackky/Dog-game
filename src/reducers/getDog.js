import {SET_DOGS} from '../actions/getDogs'

export default (state = {}, action = {}) => {
  console.log('getDog action test:', action);
  switch(action.type) {
    case SET_DOGS:
      return action.payload
    default:
      return state
  }
}


