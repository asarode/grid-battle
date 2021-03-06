import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from 'modules/effects'
import field from './field.reducer'
import player from './player.reducer'

export const rootReducer = combineReducers({
  field,
  player
})

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

const middleware = process.env.NODE_ENV === 'production'
  ? [sagaMiddleware]
  : [sagaMiddleware, logger]

const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)
sagaMiddleware.run(rootSaga)

export default store
