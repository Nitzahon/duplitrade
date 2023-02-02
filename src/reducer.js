import { combineReducers } from '@reduxjs/toolkit'

import brokerSlice from './features/broker/brokerSlice'
import graphframeSlice from './features/graphframe/graphframeSlice'


const rootReducer = combineReducers({

    // the value of `state.broker` is whatever the broker reducer returns
    broker: brokerSlice.reducer,
    // For both reducers, we only pass in their slice of the state
    graphframe: graphframeSlice.reducer,
})

export default rootReducer

