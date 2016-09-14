import React, { Component, PropTypes as P } from 'react'
import { TILE_SIZE } from 'modules/field/field.component'

export default class Player extends Component {
  static propTypes = {
    player: P.object.isRequired,
  }

  render() {
    const { location } = this.props.player
    return <div style={{
      position: 'absolute',
      top: location.y * TILE_SIZE + 0.125 * TILE_SIZE,
      left: location.x * TILE_SIZE + 0.125 * TILE_SIZE,
      height: TILE_SIZE * 0.75,
      width: TILE_SIZE * 0.75,
      borderRadius: '100px',
      background: 'red'
    }}>
    </div>
  }
}