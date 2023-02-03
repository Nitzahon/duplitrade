import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  title: {
    name: "Neptune",
    perc: 402.70,
    win: 0.84771,
    date: 103
  },
  desc: "Neptune is semi-automated and follows both fundamental and technical analysis. Testing 123 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam varius orci et facilisis malesuada. Nulla orci lectus, faucibus eget mauris non, imperdiet feugiat orci. Aenean tincidunt convallis diam, ac malesuada nisl volutpat id. Morbi in nunc felis. Integer nec tortor sit amet lectus semper cursus. Quisque sodales nisl leo, ut pulvinar libero commodo quis. Nam nec enim ante. Donec tristique gravida elit, non commodo libero viverra a.",
  numbers: {
    balance: 50183.82,
    "net P/L": 53.44,
    floating: 53.44,
    equity: 50183.82,
    margin: 53.44
  },
  isMobile: window.innerWidth<992 //put mobile test here to not make an extra slice for it
}

const brokerSlice = createSlice({
  name: 'broker',
  initialState,
  reducers: {
    mobileUpdate: (state, action)=>{
      state.isMobile=action.payload
    }
  }
})

export const {mobileUpdate} = brokerSlice.actions
export default brokerSlice