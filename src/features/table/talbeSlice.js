import { createSlice } from '@reduxjs/toolkit'
const identicalData={
    Strategy:'Atlas',
    Ticket:30158004,
    Symbol:'DJ_EUR50',
    'Buy/Sell':'Buy',
    Size:4.00,
    Open:3866.1,
    Stop:3866.1,
    Limit:3866.1,
    Current:3866.1,
    "Open Time (GMT)":'2022.03.17  16:05:15',
    selected:false, 
    copied:false
}
const identicalDataMobile={
    Strategy:'Ace',
    Ticket:0.84771,
    Symbol:'NZD/USD',
    'Buy/Sell':'Buy',
    Size:0.84771,
    Open:0.84771,
    Stop:null,
    Limit:null,
    Current:null,
    "Open Time (GMT)":'2021-08-06 15:57:49',
    "Net P/L":-72.35,
    selected:false,
    copied:false
    
}
const negatives=[0,2,4,5,7,9]
const initialState = { 
    header:['Strategy', 'Ticket', 'Symbol', 'Buy/Sell', 'Size', 'Open', 'Stop', 'Limit', 'Current', 'Net P/L', 'Open Time (GMT)', 'Copy'],
    symbols:{
        DJ_EUR50:'€',
        'AUS/USD':'$',
        'NZD/USD':'$'
    },
    strategies:{
        regular:Array(10).fill(null).map((val,index)=>
        {
            return {...identicalData, "Net P/L":(negatives.includes(index)? -48.40:5166.64)}
        }),
        mobile:Array(5).fill({...identicalDataMobile})
    },
    selectedIndex:null,
    page:1

}


const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        select: (state, action)=> {
            if(action.payload.stratType!=='mobile'){
                if(state.selectedIndex===action.payload.index){
                    state.selectedIndex=null 
                }else{
                    state.selectedIndex=action.payload.index
                }
            }
            state.strategies[action.payload.stratType][action.payload.index].selected = action.payload.state;
        },
        copied:(state, action)=> {
            state.strategies[action.payload.stratType][action.payload.index].copied = action.payload.state;
        },
        page:(state, action)=> {
            state.page = action.payload;
        },
    },
})

export const { select, copied } = tableSlice.actions
export default tableSlice
