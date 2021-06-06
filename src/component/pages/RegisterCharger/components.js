import styled from 'styled-components/macro';

export const BaseLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
`
export const BackIcon = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 40px;
    height: 40px;
    margin: 30px;
    background-color: rgba(50, 50, 50, 0.7);
    border-radius: 50%;
    font-size: 1.5rem;
    color: white;
    transition: background-color 500ms;

    &:hover {
        background-color: rgba(50, 50, 50, 1.0);
    }
`
export const HeaderLayout = styled.div`
    height: 150px;
    padding: 30px;
    background-color: lightgray;
`
export const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    padding: 30px 30px 138px 30px;
    gap: 20px;
`
export const TitleInput = styled.input`
    border:none;
    border-bottom: 1px solid black;
    font-size: 1.5rem;

    &:focus {
        outline: none;
    }
`
export const EachLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`
export const Label = styled.label`
    font-size: 1rem;
`
export const Input = styled.input`
    flex: 1 1 0;
    border:none;
    border-bottom: 1px solid black;
    font-size: 0.9rem;
    text-align: right;

    &:focus {
        outline: none;
    }
`
export const Map = styled.div`
    height: 230px;
    background-color: lightgray;
`
export const Button = styled.button`
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    background-color: white;
    box-shadow: 0 0 10px lightgray;
    font-size: 0.9rem;
    transition: background-color 500ms;

    &:hover {
        background-color: lightgray;
    }
`
export const FooterLayout = styled.div`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    bottom: 0;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 20px #aaaaaa;
    gap: 30px;
`