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
        <ul>
          {this.props.items.map(item => {
            return (
              <Item key={item.id} item={item}/>
            )
          })
          }
        </ul>
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
