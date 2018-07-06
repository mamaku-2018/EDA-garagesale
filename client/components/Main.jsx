import React from 'react'
import {connect} from 'react-redux'
import {getAllItems} from '../apiClient'
import Item from './Item'

class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.dispatch(getAllItems())
  }

  render () {
    return (
      <div className='main'>
        <h2>Items for Sale</h2>
        <h3>Everything must go!</h3>
        <table>
          <thead>
          </thead>
          <tbody>
            {this.props.items.map(item => {
              return (
                <Item key={item.id} item={item}/>
              )
            })}
          </tbody>
        </table>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(Main)
