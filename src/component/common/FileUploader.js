import React from 'react';
import styled from 'styled-components/macro';

function FileUploader(props) {
  const hiddenFileInput = React.useRef(null);
  
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const image = event.target.files[0];
    props.handleFile(image);
  };

  return (
    <>
      <Button onClick={handleClick}>+</Button>
      <input type="file"
             ref={hiddenFileInput}
             style={{display:'none'}}
             onChange={handleChange} /> 
    </>
  );
};

export default FileUploader;

const Button = styled.button`
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    transition: background-color 500ms;
    font-size: 5rem;

    &:hover {
        background-color: rgba(0, 0, 0, 0.3);
    }
`;