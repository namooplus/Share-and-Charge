import React from 'react';
import styled from 'styled-components/macro';

function ShadowSelector(props) {
  return <Input type="number" value={props.value} onChange={props.onChange}/>;
}

export default ShadowSelector;

const Input = styled.input`
    flex: 1 1 0;
    height: 48px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: white;
    border: none;
    box-shadow: 0 0 20px #aaaaaa;
    color: black;
    font-size: 0.9rem;
    text-align: center;

    &:focus {
      outline: none;
    }
`