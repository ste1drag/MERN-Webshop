import {createSlice} from "@reduxjs/toolkit"

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalNumber:0,
        totalPrice:0
    },
    reducers:{
        addToCart(state,action){
            const newItem=action.payload;
            const existingItem=state.items.find(item=>item.id===newItem.id);
            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice+=newItem.price;
            }else{
                state.items.push({
                    id:newItem.id,
                    name:newItem.name,
                    price:newItem.price,
                    type: newItem.type,
                    quantity:1,
                    totalPrice:newItem.price,
                    desc:newItem.desc
                });
                state.totalNumber++;
                state.totalPrice+=newItem.price;
            }
        },
        removeFromCart(state,action){
            const itemId=action.payload;
            const rmItem=state.items.find(item=>item.id===itemId);
            if(rmItem.quantity===1){
                state.items.filter(item=>item.id!==itemId);
                state.totalNumber--;
                state.totalPrice-=rmItem.price;
            }else{
                rmItem.totalPrice-=rmItem.price;
                rmItem.quantity--;
            }
        }
    }
});

export const cartActions=cartSlice.actions;

export default cartSlice;
