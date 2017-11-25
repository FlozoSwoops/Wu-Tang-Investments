import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
font-size: 20px;
color: blue;
text-align: center;
background-color: rgba(25, 100, 130, .25);
box-shadow:  0 0 1em black, 0 0 1em white;
height: 100px;
width: 100%;
a {
  text-decoration: none;
  color: white;
}
a:hover {
color: red;
}
`

class NavBar extends Component {
    render() {
        return (
            <Nav>
               
                <div>
                    <Link to="/"> Home  </Link>
                </div>
                <div>
                    <Link to="/graphs"> Trends </Link>
                </div>
                <div>
                    <Link to="/"> Log In  </Link>
                </div>
                

            </Nav>
        );
    }
}

export default NavBar