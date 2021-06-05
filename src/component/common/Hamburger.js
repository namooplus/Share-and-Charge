import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Hamburger(props) {
  return (
    <Link to="/menu">
        <MenuIcon><FontAwesomeIcon icon={faBars}/></MenuIcon>
    </Link>);
}

export default Hamburger;

export const MenuIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 50%;
    font-size: 1.5rem;
    color: black;
    transition: background-color 500ms;

    &:hover {
        background-color: lightgray;
    }
`