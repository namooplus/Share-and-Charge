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
      <Button onClick={handleClick}>사진 업로드</Button>
      <input type="file"
             ref={hiddenFileInput}
             style={{display:'none'}}
             onChange={handleChange} /> 
    </>
  );
};

export default FileUploader;

const Button = styled.button`
    border: none;
    background-color: white;
    box-shadow: 0 0 20px #999999;
    padding: 7px 15px;
    transition: background-color 500ms;

    &:hover {
        background-color: lightgray;
    }
`;