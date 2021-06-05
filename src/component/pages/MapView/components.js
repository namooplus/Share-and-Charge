import styled, { css } from 'styled-components/macro';

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
    padding: 30px;
`
export const MenuLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`
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
export const HeaderLabel = styled.h1`
    margin: 0px;
    margin-top: 30px;
    font-size: 1.5rem;
`
export const ToggleLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    align-self: center;
    height: 40px;
    width: 150px;
    margin-top: 20px;
    background-color: lightgray;
    box-shadow: 0 0 10px lightgray;
    border-radius: 20px;
    overflow: hidden;
`
export const ToggleItem = styled.button`
    flex: 1 1 0;
    align-self: stretch;
    border: none;
    border-radius: 20px;

    ${props => {
        if (props.selected)
        {
            return css`
                background: white;
                font-weight: 700;
                box-shadow: 0 0 10px lightgray;
            `
        }
        else
        {
            return css`
                opacity: 0.5;
                background: none;
                transition: background-color 500ms;
                &:hover {
                    background-color: white;
                }
            `
        }
    }}
    
`
export const ContentLayout = styled.div`
    display: flex;
    flex: 1 1 0;
    flex-flow: column nowrap;
    align-items: stretch;
`
export const Map = styled.div`
    height: 100%;
`