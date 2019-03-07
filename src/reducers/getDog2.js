import {SET_DOGS2} from '../actions/getDogs2'

export default (state = {}, action = {}) => {
  switch(action.type) {
    case SET_DOGS2:
      return action.payload
    default:
      return state
  }
}