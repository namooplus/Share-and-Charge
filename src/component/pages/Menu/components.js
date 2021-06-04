import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const BaseLayout = styled.div`
    display: flex;
    height: 100vh;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
`
export const HeaderLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
    padding: 30px 30px 0 30px;
`
export const CloseIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
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
export const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
    padding: 30px;
    gap: 15px;
`
export const CustomLink = styled(Link)`
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    font-weight: 700;
    transition: 500ms;
    
    &:hover {
        color: blueviolet;
        transform: scale(1.01, 1.01);
    }
`