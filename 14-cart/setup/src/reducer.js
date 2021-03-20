const reducer = (state,action)=>{
    switch(action.type){
        case 'CLEAR-CART':
            return {...state, cart:[]};
        case 'REMOVE':
            return {...state, cart: state.cart.filter(cartItem=>cartItem.id!==action.payload)};
        case 'TOGGLE_AMOUNT':
            if(action.payload.type==='i'){
                return {...state, cart: state.cart.map(cartItem=>{
                    if(cartItem.id===action.payload.id)
                        return {...cartItem, amount:cartItem.amount+1};
                    return cartItem;
                })};
            }
            else{
                return {...state, cart: state.cart.map(cartItem=>{
                    if(cartItem.id===action.payload.id)
                        return {...cartItem, amount:cartItem.amount-1};
                    return cartItem;
                }).filter(cartItem=>cartItem.amount!==0)};
            }
        case 'GET_TOTALS':
            let {total,amount} = state.cart.reduce((total,cartItem)=>{
                const {price, amount} = cartItem;
                total.amount += amount;
                total.total += price*amount;
                return total;
            }, {total:0,amount:0});
            total = parseFloat(total.toFixed(2));
            return {...state,total,amount};
        case 'LOADING':
            return {...state, loading:true};
        case 'DISPLAY':
            return {...state, loading:false, cart:action.payload};
        default:
            throw new Error('no matching action type');
    }
}

export default reducer;
