import styled from 'styled-components/macro';

export const BaseLayout = styled.div`
    display: flex;
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
export const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    padding: 30px;
    gap: 30px;
`
