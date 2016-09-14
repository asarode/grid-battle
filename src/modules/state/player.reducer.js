import I from 'immutable'
import { isLegalMove } from './field.reducer'

const initialState = I.fromJS({
  player: {
    location: {
      x: 0,
      y: 0
    }
  }
})

export const MOVE_PLAYER = 'MOVE_PLAYER'

export const UP = 'UP'
export const DOWN = 'DOWN'
export const LEFT = 'LEFT'
export const RIGHT = 'RIGHT'

export const movePlayer = (field, direction, distance) => ({
  type: MOVE_PLAYER,
  payload: { field, direction, distance }
})

export const getPlayer = (state) => state.get('player')

const player = (state = initialState, action = {}) => {
  switch (action.type) {
    case MOVE_PLAYER: {
      const { field, distance, direction } = action.payload
      let newLocation
      if (direction === UP) {
        newLocation = state
          .getIn(['player', 'location'])
          .update('y', (y) => y - 1)
      } else if (direction === DOWN) {
        newLocation = state
          .getIn(['player', 'location'])
          .update('y', (y) => y + 1)
      } else if (direction === LEFT) {
        newLocation = state
          .getIn(['player', 'location'])
          .update('x', (x) => x - 1)
      } else if (direction === RIGHT) {
        newLocation = state
          .getIn(['player', 'location'])
          .update('x', (x) => x + 1)
      }
      if (isLegalMove(field, newLocation)) {
        return state.setIn(['player', 'location'], newLocation)
      }
      return state
    }
    default:
      return state
  }
}

export default player
