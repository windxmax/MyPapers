import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './Reducers/RootReducer'

export const store = createStore(rootReducer)
