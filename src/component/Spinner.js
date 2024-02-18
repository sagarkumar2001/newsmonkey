import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <img src={loading} alt='loading' style={{height:'120px', width:'120px'}} />
      </div>
    )
  }
}

export default Spinner
