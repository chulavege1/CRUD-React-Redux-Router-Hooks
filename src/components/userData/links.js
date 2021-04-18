import React from 'react'
// Style.
import styled from 'styled-components'
// Links.
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <NavRouteTheme>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/allusers">See all users</Link>
                    </li>
                    <li>
                        <Link to="/usereditor">Edit users data</Link>
                    </li>
                </ul>
            </nav>
        </NavRouteTheme>
    )
}

const NavRouteTheme = styled.div `width: 400px; height: 40px; margin: 10px;
background: rgba(0,0,0,0.3); 
border-radius: 4px;
    & ul {
        display: flex; justify-content: space-around; align-items: center;
        margin: 0; padding: 0; height: 40px;
    }
        & li {
            list-style: none; 
        }
            & a {
                color: #eee; font-size: 22px; 
            }`


export default Links