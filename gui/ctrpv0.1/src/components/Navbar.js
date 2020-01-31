import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from '../img/ctrpLogo_v2.png';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <span className="mr-2">
                        <img src={logo} alt="CTRP" className="rounded background=inherited"/>                    
                    </span>
                </Link>
                {/* <Link to="/boletin">
                    <span className="mr-2">
                        Boletin              
                    </span>
                </Link> */}
            </NavWrapper>        )
    }
}

export const ButtonContainer = styled.button`
    width: 7rem;
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    color: var(--lightBlue);
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin:0.2rem 0.5rem 0.2rem 0.2rem;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: var(--lightBlue);
        color: var(--mainBlue);
    }
    &:focus {
        outline:none;
    }
`
const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link {
        color: var(--mainWhite) !important;
        font-size: 40px;
        text-transform: capitalize;
    }
`
