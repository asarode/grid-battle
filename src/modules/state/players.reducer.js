import I from 'immutable'

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

export const movePlayer = (direction, distance) => ({
  type: MOVE_PLAYER,
  payload: { direction, distance }
})

export const getPlayer = (state) => state.get('player')

const players = (state = initialState, action = {}) => {
  switch (action.type) {
    case MOVE_PLAYER: {
      const { distance, direction } = action.payload
      if (direction === UP) {
        return state.updateIn(['player', 'location', 'y'], (y) => y - 1)
      } else if (direction === DOWN) {
        return state.updateIn(['player', 'location', 'y'], (y) => y + 1)
      } else if (direction === LEFT) {
        return state.updateIn(['player', 'location', 'x'], (x) => x - 1)
      } else if (direction === RIGHT) {
        return state.updateIn(['player', 'location', 'x'], (x) => x + 1)
      }
    }
    default:
      return state
  }
}

export default players
