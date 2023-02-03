import { createSlice } from '@reduxjs/toolkit'
const initialState = { 
    
    tabs:["Profit","Balance", "DD", "Monthly P/L", "Providers P/L", "Symbols"],
    activeTab: 0,
    yAxis:['-400$','-200$','0','200$','400$','600$','800$','1000$']
}


const graphframeSlice = createSlice({
    name: 'graphframe',
    initialState,
    reducers: {
        tabActive: (state, action)=> {
            state.activeTab = action.payload;
        }
    },
})

export const { tabActive } = graphframeSlice.actions
export default graphframeSlice
