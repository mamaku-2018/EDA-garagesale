import request from 'superagent'

export {
  getAllItems
}

function getAllItems () {
  return request
    .get('/api/v1/items')
    .then(res => res.json(res))
}
