import React from 'react';
import CartItem from './CartItem';

const CardList = ({value}) => {
    console.log(value);
    
    const {cart} = value;
    return ( 
        <div className='container-fluid'>
            {cart.map(item =>{
                return <CartItem  key={item.id} item={item}
                value={value}/>

            })}
             
            
        </div>
     );
}
 
export default CardList;