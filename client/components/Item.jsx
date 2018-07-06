import React from 'react'

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      onClick: false
    }
    this.playSong = this.playSong.bind(this)
  }

  playSong () {
    this.setState({
      onClick: true
    })
  }

  // const Item = (props) => {
  render () {
    return (
      <div className='main-item'>
        <div>
          <li> <img id={this.props.item.id} src={this.props.item.imageurl} alt=""/> </li>
          <li>
            <span id='name'><strong>{this.props.item.name}</strong></span><br />
            <span id='description'>{this.props.item.description} </span><br />
            <span id='price'> ${this.props.item.price}</span>
          </li>
          <button onClick={() => this.playSong()}>BUY</button>
        </div>
        {this.state.onClick && <audio
          preload='auto'
          src='/audio/Gold.mp3'
          loop='true'
          autoPlay='true'
        />}
      </div>
    )
  }
}

export default Item
