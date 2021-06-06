import React from 'react';
import styled from 'styled-components/macro';

function ShadowPicker(props) {
  return (
    <BaseLayout>
      <Input type="number" value={props.value} onChange={props.onChange} min="0" max="24"/>시
    </BaseLayout>
  );
}

export default ShadowPicker;

const BaseLayout = styled.div`
  display: flex;
  flex: 1 1 0;
  flex-flow: row nowrap;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
  background-color: white;
  box-shadow: 0 0 20px #aaaaaa;
`
const Input = styled.input`
  flex: 1 1 0;
  height: 48px;
  background-color: white;
  border: none;
  color: black;
  font-size: 0.9rem;
  text-align: center;

  &:focus {
    outline: none;
  }
`