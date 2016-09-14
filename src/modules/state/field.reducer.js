import I from 'immutable'
import player from './player.reducer'

const toGrid = (inputList) => {
  const gridStr = inputList[0].trim().split('\n')
  return gridStr.map((rowStr) => {
    return rowStr.trim().split(' ')
      .map((tileStr) => true)
  })
}

const initialState = I.fromJS({
  field: toGrid`
    o o o o o o o o o o o o o
    o o o o o o o o o o o
    o o o o o o o o o o o o
    o o o o o o o o o o o
    o o o o o o o o o o o o o o o
    o o o o o o o o o o o
    o o o o o o o o o o o
    o o o o o o o o o o o o o
    o o o o o o o o o o o o
    o o o o o o o o o o o o o o
    o o o o o o o o o o o o
    o o o o o o o o o o o o o
  `
})

const field = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state
  }
}

export const isLegalMove = (field, location) => {
  const x = location.get('x')
  const y = location.get('y')

  if (x < 0 || y < 0) {
    return false
  }

  if (!field.has(y)) {
    return false
  }

  if (!field.get(y).has(x)) {
    return false
  }

  return true
}

export default field
