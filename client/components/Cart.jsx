import React from 'react'

const Cart = () => {
  return (

    <div className='cart'>
      <ul>
        <li>{this.cart}</li>
      </ul>
    </div>

  )
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}
export default mapStateToProps(Cart)
