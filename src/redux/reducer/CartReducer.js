

const initState={
    products: [],
    totalQuantity: 0,
    totalPrice: 0,
}

const CartReducer=( state= initState, action ) => {
    let findPro;
    let index;

    switch(action.type) {
        case 'ADD_TO_CART':
            const { product, quantity}= action.payload;
            const check= state.products.find(prod => prod.id === product.id);
            if(check){
                return state;
            }
            else{
                const Tquantity= state.totalQuantity + quantity;
                const TPrice= state.totalPrice + product.price * quantity;
                product.quantity= quantity;
                console.log(product.quantity);
                return{
                    ...state,
                    products:[ ...state.products, product],
                    totalQuantity: Tquantity,
                    totalPrice: TPrice,
                }
            }
        
        // for decrement cart item
        case 'INC':
            findPro= state.products.find(prodt => prodt.id === action.payload);
            index= state.products.findIndex( prodt => prodt.id === action.payload);
            findPro.quantity +=1;
            state.products[index]=findPro;
            return{
                ...state,
                totalQuantity: state.totalQuantity+1,
                totalPrice: state.totalPrice + findPro.price
            }

        // for decrement cart item
        case "DEC":
        findPro = state.products.find(product => product.id === action.payload);
        index = state.products.findIndex(product => product.id === action.payload);
        if(findPro.quantity > 1){
           findPro.quantity -= 1;
           state.products[index] = findPro;
           return {
               ...state,
               totalQuantity: state.totalQuantity - 1,
               totalPrice: state.totalPrice - findPro.price,
           }
        } else {
            return state;
        }

        case "REMOVE":
            findPro = state.products.find(product => product.id === action.payload);
            const filteredProducts= state.products.filter(product => product.id != action.payload)
            return{
                ...state,
                products: filteredProducts,
                totalQuantity: state.totalQuantity - findPro.quantity,
                totalPrice: state.totalPrice - findPro.price * findPro.quantity,
            }
        default: 
            return state;
    }
}
export default CartReducer;