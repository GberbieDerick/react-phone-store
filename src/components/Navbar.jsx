import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';
import ButtonContainer from './Button';



class Navbar extends Component {
    
    render() { 
        return ( 
        
        <NavbarWrapper className="navbar navbar-expand-sm  navbar-dark px-sm">
        
        <Link to='/'>
        <img src={logo} alt="brand Logo"  className='navbar-brand'/>
        </Link>

        <ul className='navbar-nav align-items-center'>
            <li className='nav-item ml-5'>
                <Link to='/' className='navbar-link text-white'>Product</Link>
            </li>

        </ul>
        <Link to='/cart' className='ml-auto' >
            <ButtonContainer>
                <span className='mr-2'>
                 <i className="fa fa-cart-plus"></i>
                 </span>
                 my cart
            </ButtonContainer>
               
                
            
        </Link>

        </NavbarWrapper>
            );
    }

}
 
const NavbarWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color: var(--mainWhite) !important;
    font-size:1.3rem;
    text-transform: capitalize !important;

}



`;
export default Navbar;