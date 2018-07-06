import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
// import Main from './Main'
// import Cart from './Cart'

class App extends React.Component {
  render () {
    return (
      <div className='app-container'>
        <Nav/>
        <Banner/>
        {/* <Main/> */}
        {/* <Cart/> */}
      </div>
    )
  }
}
export default App
