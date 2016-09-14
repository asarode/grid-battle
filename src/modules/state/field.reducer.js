import I from 'immutable'

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

export default field
