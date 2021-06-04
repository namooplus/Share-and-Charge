import React from 'react';
import styled from 'styled-components/macro';

function ShadowSearch(props) {
  return <Input type="text" placeholder={props.placeholder}/>;
}

export default ShadowSearch;

const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: white;
    border: none;
    box-shadow: 0 0 20px #aaaaaa;
    color: black;
    font-size: 0.9rem;

    &:focus {
      outline: none;
    }
`