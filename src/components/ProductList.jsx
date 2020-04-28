import React, { Component } from 'react';

import Product from './Product';

import {ProductConsumer} from '../context'
import Title from './Title';

class ProductList extends Component {
    
    
    render() { 

        // console.log(this.state.products);
        return ( 
            <div>
                <React.Fragment>
                    <div className='py-5'>
                        <div className="container">
                            <Title name='our' title='products'></Title>
                            <div className="row">
                                <ProductConsumer>
                                {(value)=>{
                                    return value.products.map(product=>{
                                        return <Product key={product.id} product={product}/>
                                    })

                                 }}

                                </ProductConsumer>
                                
                                <div className="col-4">
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                </React.Fragment>
                
                {/* <Product></Product> */}
                
            </div>
         );
    }
}
 
export default ProductList;