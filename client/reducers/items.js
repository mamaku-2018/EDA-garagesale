import {RECEIVE_ITEMS} from '../actions'

const intitialState = []
const items = (state = intitialState, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return action.items

    default:
      return state
  }
}

export default items
