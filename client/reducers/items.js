import itemData from '../../data/items'
import {RECEIVE_ITEMS} from '../actions'

const intitialState = itemData.items
const items = (state = intitialState, action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return state

    default:
      return state
  }
}

export default items
