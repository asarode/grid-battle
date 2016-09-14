import React, { PureComponent } from 'react'

export const TILE_SIZE = 50
export default class Field extends PureComponent {
  render () {
    const grid = this.props.field.map((row, x) => {
      return <div key={x}>
        {row.map((tile, y) =>
          <Tile key={`${x} ${y}`} x={x} y={y} size={TILE_SIZE} />)}
      </div>
    })
    return <div>
      {grid}
    </div>
  }
}

const Tile = ({ x, y, size }) => (
  <div style={{
    width: size,
    height: size,
    position: 'absolute',
    top: x * size,
    left: y * size,
    background: 'green',
    border: '1px solid black'
  }}>
  </div>
)