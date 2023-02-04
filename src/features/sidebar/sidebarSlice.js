import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  active:false
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    active: (state, action)=>{
      state.active=action.payload
    }
  }
})

export const {active} = sidebarSlice.actions
export default sidebarSlice