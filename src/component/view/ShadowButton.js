import React from 'react';
import styled from 'styled-components';

function ShadowButton(props) {
  return <Button>{props.children}</Button>;
}

export default ShadowButton;

const Button = styled.button`
    width: 100%;
    height: 48px;
    background-color: #42C4F4;
    border: none;
    box-shadow: 0 0 20px #aaaaaa;
    color: white;
    font-size: 0.9rem;
    transition: background-color 500ms;

    &:hover {
      background-color: #26a0cc;
    }
`