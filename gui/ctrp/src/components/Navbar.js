import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../CTR-icon.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm row0Color px-sm-5">
                <Link to="/">
                    <img src={logo} alt="Landingpage" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/learn" className="nav-link">
                            Learn
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/pray" className="nav-link">
                            Pray
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/give" className="nav-link">
                            Give
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/Evangelize" className="nav-link">
                            Evangelize
                        </Link>
                    </li>

                </ul>
                <Link to='/cart' className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                            <i className="fas fa-cart-plus" />
                        </span>
                        Donate
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    background:var(--row0Color);
    .nav-link{
        color:var(--colum1Color)!important;
        font-size:1.3rem;
        text-transform: capitalize;
    }
`