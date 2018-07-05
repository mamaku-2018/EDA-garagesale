import {
  RECEIVE_ITEMS
} from '../actions'

const cart = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_ITEMS:
      return getNewCart(state, action.id)
    default:
      return state
  }
}

function getNewCart (cart, id) {
  let exists = false
  const newCart = cart.map(item => {
    if (item.id === id) {
      item.quantity += 1
      exists = true
    }
    return item
  })
  if (exists) {
    return newCart
  } else {
    newCart.push({id: id, quantity: 1})
    return newCart
  }
}
export default cart
