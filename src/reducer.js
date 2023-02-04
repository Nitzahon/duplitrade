import { combineReducers } from '@reduxjs/toolkit'

import brokerSlice from './features/broker/brokerSlice'
import graphframeSlice from './features/graphframe/graphframeSlice'
import sidebarSlice from './features/sidebar/sidebarSlice'
import tableSlice from './features/table/talbeSlice'
const rootReducer = combineReducers({

    // the value of `state.broker` is whatever the broker reducer returns
    broker: brokerSlice.reducer,
    // For both reducers, we only pass in their slice of the state
    graphframe: graphframeSlice.reducer,
    sidebar: sidebarSlice.reducer,
    table: tableSlice.reducer
})

export default rootReducer

