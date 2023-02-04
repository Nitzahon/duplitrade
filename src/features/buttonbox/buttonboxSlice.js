import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  active:[false,false,false]
}

const buttonboxSlice = createSlice({
  name: 'buttonbox',
  initialState,
  reducers: {
    activeUpdate: (state, action)=>{
      state.active[action.payload.index]=action.payload.state
    }
  }
})

export const {activeUpdate} = buttonboxSlice.actions
export default buttonboxSlice