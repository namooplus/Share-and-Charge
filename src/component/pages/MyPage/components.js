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
export const SubLabel = styled.h2`
    margin: 0;
    font-size: 1.3rem;
`
export const Response = styled.div`
font-weight: 700;
display: flex;

`