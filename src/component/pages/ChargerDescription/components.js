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
    height: 200px;
`
export const Image = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`
export const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    padding: 30px 30px 216px 30px;
    box-shadow: 0 0 20px gray;
`
export const Title = styled.h1`
    margin: 0px;
    font-size: 1.5rem;
`
export const UserLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    margin-top: 10px;
`
export const Description = styled.p`
    margin: 0px;
    margin-top: 15px;
    font-size: 0.9rem;
    line-height: 1.5rem;
`
export const Map = styled.div`
    height: 230px;
    background-color: lightgray;
    margin-top: 15px;
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
    z-index: 1;
`
export const SelectLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
`