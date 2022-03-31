
const initState = {
    products: [
        {id: 1, name: 'Man t-shirt', image: '1.jpg', price: 220, delprice: 290, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 2, name: 'Resin Strap', image: '2.jpg', price: 330, delprice: 360, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 3, name: 'Man trouser', image: '3.jpg', price: 150, delprice: 215, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 4, name: 'Shoes', image: '4.jpg', price: 500, delprice: 590, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 5, name: 'Man pant', image: '5.jpg', price: 250, delprice: 295, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 6, name: 'Male jeans', image: '6.jpg', price: 650, delprice: 680, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 7, name: 'Female soot', image: '7.jpg', price: 350, delprice: 435, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 8, name: 'City Backpack Black', image: '8.jpg', price: 280, delprice: 380, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        // {id: 9, name: 'Male jacket ', image: '9.jpg', price: 295,  delprice: 395, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},        
        // {id: 10, name: 'Male jacket', image: '10.jpg', price: 120, delprice: 220, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},        

    ],
    product: {}
    // received single item details here
}


const ProductReducer= ( state= initState, action ) => {
    switch(action.type) {
        case 'PRODUCT':
            return {
                ...state,
                product: state.products.find(product => product.id === parseInt(action.id))
            }
        default: return state;
    }
}

export default ProductReducer;