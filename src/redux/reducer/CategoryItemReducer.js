import img1 from '../../images/woman/1.jpg';
import img2 from '../../images/woman/2.jpg';
import img3 from '../../images/woman/3.jpg';
import img4 from '../../images/woman/4.jpg';
import img5 from '../../images/woman/5.jpg';
import img6 from '../../images/woman/6.jpg';
import img7 from '../../images/woman/7.jpg';
import img8 from '../../images/woman/8.jpg';
import img9 from '../../images/woman/9.jpg';
import img10 from '../../images/woman/10.jpg';
import img11 from '../../images/woman/11.jpg';
import img12 from '../../images/woman/12.webp';

import img13 from '../../images/woman/13.jpg';
import img14 from '../../images/woman/14.jpg';
import img15 from '../../images/woman/15.jpg';
import img16 from '../../images/woman/16.jpg';
import img17 from '../../images/woman/17.jpg';
import img18 from '../../images/woman/18.jpg';
import img19 from '../../images/woman/19.jpg';
import img20 from '../../images/woman/20.jpg';
import img21 from '../../images/woman/21.jpg';
import img22 from '../../images/woman/22.jpg';
import img23 from '../../images/woman/23.jpg';






const initialState={
    items:[
        {id: 1, name: 'Ladies handband', category:'jewellery', image: img11, price: 180, delprice: 220, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 2, name: 'Ladies Coat', category:'coat', image: img19, price: 180, delprice: 220, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 3, name: 'Ladies Pant', category:'lpant', image: img3, price: 150, delprice: 215, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 4, name: 'Cap', category:'accessories', image: img4, price: 500, delprice: 590, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 5, name: 'Pant', category:'mpant', image: img5, price: 250, delprice: 295, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 6, name: 'Hand Watch', category:'accessories', image: img6, price: 650, delprice: 680, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 7, name: 'Female soot', category:'lshirt', image: img7, price: 350, delprice: 435, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 8, name: 'City Backpack Black', category:'bag', image: img8, price: 280, delprice: 380, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 9, name: 'Ladies Shirt ', category:'lshirt', image: img9, price: 295,  delprice: 395, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},        
        {id: 10, name: 'Leather White Trainers', category:'shoes', image: img10, price: 120, delprice: 220, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 11, name: 'T-shirt', category:'ltshirt', image: img1, price: 220, delprice: 290, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 12, name: 'Resin Strap', category:'lpant', image: img12, price: 330, delprice: 360, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 13, name: 'Female soot', category:'lshirt', image: img13, price: 50, delprice: 65, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        
        {id: 14, name: 'Female Strap', category:'accessories', image: img14, price: 250, delprice: 280, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},       
        {id: 15, name: 'T-shirt', category:'ltshirt', image: img15, price: 120, delprice: 190, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},        
        {id: 16, name: 'Backpack Black', category:'bag', image: img16, price: 190, delprice: 220, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 17, name: 'Ladies Coat', category:'coat', image: img17, price: 380, delprice: 420, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 18, name: 'Ladies Pant', category:'lpant', image: img18, price: 199, delprice: 215, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 19, name: 'Ladies Coat', category:'coat', image: img19, price: 299, delprice: 320, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 20, name: 'Female soot', category:'lshirt', image: img20, price: 199, delprice: 235, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 21, name: 'Female shirtt', category:'lshirt', image: img21, price: 165, delprice: 235, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},
        {id: 22, name: 'Ladies Coat', category:'coat', image: img22, price: 299, delprice: 320, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"}, 
        {id: 23, name: 'Ladies Pant', category:'lpant', image: img23, price: 269, delprice: 315, quantity: 1, desc: "Lorem ipsum dolor elit.This is the best aspernatur, quo nostrum natus dolor obcaecati reprehenderit reiciendis, repellat omnis voluptates et, dolorem maxime iure sapiente quia! Aliquam, vel soluta?"},

    ]
}

const CategoryItemReducer=( state= initialState, action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default CategoryItemReducer;