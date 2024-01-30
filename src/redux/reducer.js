import {createSlice} from '@reduxjs/toolkit'
const initialState={
    cartValue:[],
    totalPrice:0
}
const reducer=createSlice({
    name:"reducer",
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.cartValue.push(action.payload)
            const price=state.cartValue.map(obj=>obj.dataPrice)
            state.totalPrice=price.reduce((a,b)=>a+b,0)

        },
        dec:(state,action)=>{
            const index=state.cartValue.findIndex(ob=>ob.dataName===action.payload.dataName)
            if(index>-1){
            state.cartValue.splice(index,2)
            }
            const price=state.cartValue.map(obj=>obj.dataPrice)
            state.totalPrice=price.reduce((a,b)=>a+b,0)

        }
    }
})
export const {inc,dec}=reducer.actions
export default reducer.reducer