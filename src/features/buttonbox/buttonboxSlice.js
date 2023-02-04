import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  active:false
}

const buttonboxSlice = createSlice({
  name: 'buttonbox',
  initialState,
  reducers: {
    active: (state, action)=>{
      state.active=action.payload
    }
  }
})

export const {active} = buttonboxSlice.actions
export default buttonboxSlice