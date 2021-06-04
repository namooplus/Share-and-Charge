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
    padding: 30px 30px 0 30px;
`
export const BackIcon = styled.div`
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
    align-items: center;
    padding: 30px 30px 138px 30px;
    gap: 30px;
`
export const Panel = styled.div`
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    padding: 20px;
    background-color: white;
    box-shadow: 0 0 20px lightgray;
    box-sizing: border-box;
`
export const UserLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`
export const UserIcon = styled.div`
    width: 25px;
    height: 25px;
    background-color: gray;
    border-radius: 50%;
`
export const UserLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 10px;
`
export const Description = styled.p`
    margin: 0px;
    margin-top: 15px;
    font-size: 0.9rem;
    line-height: 1.3rem;
`
export const FooterLayout = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 20px #aaaaaa;
`