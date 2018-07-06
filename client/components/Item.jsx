import React from 'react'

const Item = (props) => {
  return (
    <div className='main-item'>
      <li> <img id={props.item.id} src={props.item.imageurl} alt=""/> </li>
      <li> {props.item.name} <br /> {props.item.description} <br /> {props.item.price}</li>
    </div>
  )
}
export default Item
