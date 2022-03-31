import img1 from '../../images/man/1.jpg';
import img2 from '../../images/man/2.jpg';
import img3 from '../../images/man/3.jpg';
import img4 from '../../images/man/4.jpg';
import img5 from '../../images/man/5.jpg';
import img6 from '../../images/man/6.jpg';
import img7 from '../../images/man/7.jpg';
import img8 from '../../images/man/8.jpg';
import img9 from '../../images/man/9.jpg';
import img10 from '../../images/man/10.jpg';
import img11 from '../../images/man/11.jpg';
import img12 from '../../images/man/12.jpg';
import img13 from '../../images/man/13.jpg';
import img14 from '../../images/man/14.jpg';
import img15 from '../../images/man/15.jpg';
import img16 from '../../images/man/16.jpg';
import img17 from '../../images/man/17.jpg';
import img18 from '../../images/man/18.jpg';
import img19 from '../../images/man/19.jpg';
import img20 from '../../images/man/20.jpg';
import img21 from '../../images/man/21.jpg';
import img22 from '../../images/man/22.jpg';
import img23 from '../../images/man/23.jpg';
import img24 from '../../images/man/24.jpg';
import img25 from '../../images/man/25.jpg';







const initialState={
    items:[
        {id: 1, name: 'Denim jacket', category:'jacket', image: img1, price: 180, delprice: 220, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 2, name: 'Vincen Sneaker', category:'shoes', image: img2, price: 180, delprice: 220, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 3, name: 'Sherpa denim jacket', category:'jacket', image: img3, price: 150, delprice: 215, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 4, name: 'men satin shirt', category:'shirt', image: img4, price: 500, delprice: 590, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 5, name: 'Coaches Hat', category:'accessories', image: img5, price: 250, delprice: 295, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 6, name: 'Printed T-shirt', category:'tshirt', image: img6, price: 650, delprice: 680, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 7, name: 'Sherpa denim jacket', category:'jacket', image: img7, price: 350, delprice: 435, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 8, name: 'men satin shirt', category:'shirt', image: img8, price: 280, delprice: 380, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 9, name: 'Sherpa denim jacket ', category:'jacket', image: img9, price: 295,  delprice: 395, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},        
        {id: 10, name: 'Coaches Hat', category:'accessories', image: img10, price: 120, delprice: 220, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 11, name: 'T-shirt', category:'ltshirt', image: img11, price: 220, delprice: 290, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 12, name: 'men satin shirt', category:'shirt', image: img12, price: 330, delprice: 360, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 13, name: 'Sherpa denim jacket', category:'jacket', image: img13, price: 50, delprice: 65, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        
        {id: 14, name: 'Vincen Sneaker', category:'shoes', image: img14, price: 250, delprice: 280, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},       
        {id: 15, name: 'T-shirt', category:'tshirt', image: img15, price: 120, delprice: 190, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},        
        {id: 16, name: 'Printed T-shirt', category:'tshirt', image: img16, price: 190, delprice: 220, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 17, name: 'Coaches Hat', category:'accessories', image: img17, price: 380, delprice: 420, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 18, name: 'Printed T-shirt', category:'tshirt', image: img18, price: 199, delprice: 215, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 19, name: 'Backpack Black', category:'bag', image: img19, price: 299, delprice: 320, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 20, name: 'men satin shirt', category:'shirt', image: img20, price: 199, delprice: 235, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 21, name: 'Vincen Pant', category:'pant', image: img21, price: 165, delprice: 235, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 22, name: 'Watch', category:'accessories', image: img22, price: 299, delprice: 320, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 23, name: 'Printed T-shirt', category:'tshirt', image: img23, price: 269, delprice: 315, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 24, name: 'Backpack Black', category:'bag', image: img24, price: 269, delprice: 315, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 25, name: 'Vincen Sneaker', category:'shoes', image: img25, price: 269, delprice: 315, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},

    ]
}

const JensItemReducer=( state= initialState, action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default JensItemReducer;