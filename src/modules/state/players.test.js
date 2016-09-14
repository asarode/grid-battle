import { expect } from 'chai'
import playersReducer, {
  movePlayer,
  UP,
  DOWN,
  LEFT,
  RIGHT,
  getPlayer
} from './players.reducer'

describe('Players Reducer', () => {
  it('moves player', () => {
    const state = playersReducer()
      .setIn(['player', 'location', 'x'], 3)
      .setIn(['player', 'location', 'y'], 3)

    const upAction = movePlayer(UP, 1)
    const upState = playersReducer(state, upAction)
    expect(getPlayer(upState).getIn(['location', 'x'])).to.equal(3)
    expect(getPlayer(upState).getIn(['location', 'y'])).to.equal(2)

    const downAction = movePlayer(DOWN, 1)
    const downState = playersReducer(state, downAction)
    expect(getPlayer(downState).getIn(['location', 'x'])).to.equal(3)
    expect(getPlayer(downState).getIn(['location', 'y'])).to.equal(4)

    const leftAction = movePlayer(LEFT, 1)
    const leftState = playersReducer(state, leftAction)
    expect(getPlayer(leftState).getIn(['location', 'x'])).to.equal(2)
    expect(getPlayer(leftState).getIn(['location', 'y'])).to.equal(3)

    const rightAction = movePlayer(RIGHT, 1)
    const rightState = playersReducer(state, rightAction)
    expect(getPlayer(rightState).getIn(['location', 'x'])).to.equal(4)
    expect(getPlayer(rightState).getIn(['location', 'y'])).to.equal(3)
  })
})
