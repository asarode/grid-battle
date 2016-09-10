import { createStore, combineReducers, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from 'modules/effects'

export const rootReducer = combineReducers({})

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
