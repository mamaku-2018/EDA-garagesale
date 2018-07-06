import { request } from 'http'

export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const SHOW_ERROR = 'SHOW_ERROR'

export const requestItems = () => {
  return {
    type: 'REQUEST_ITEMS'
  }
}

export const receiveItems = (items) => {
  return {
    type: 'RECEIVE_ITEMS',
    items
  }
}

export const showError = (errorMessage) => {
  return {
    type: 'SHOW_ERROR',
    errorMessage: errorMessage
  }
}

export function fetchItems (items) {
  return (dispatch) => {
    dispatch(requestItems())
    return request
      .get()
      .then(res => {
        dispatch(receiveItems(items))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
