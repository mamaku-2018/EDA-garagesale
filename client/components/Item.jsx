import React from 'react'

const Item = (props) => {
  return (
    <div className='main-item'>
      <li>{props.item.imageurl} {props.item.name} {props.item.description} {props.item.price}</li>
    </div>
  )
}
export default Item
