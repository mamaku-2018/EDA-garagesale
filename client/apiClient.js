import request from 'superagent'
import {receiveItems} from './actions'

export {
  getAllItems
}

function getAllItems () {
  return (dispatch) => {
    return request
      .get('/api/v1/items/')
      .then(resp => {
        dispatch(receiveItems(resp.body.items))
      })
      .catch(err => {
        console.error(err)
      })
  }
}
