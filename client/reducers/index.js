import {combineReducers} from 'redux'

import currentPage from './current-page'
import cart from './cart'
import items from './items'

export default combineReducers({
  currentPage,
  cart,
  items
})
