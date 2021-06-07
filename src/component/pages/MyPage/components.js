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
export const ProfileContainer = styled.div`
display: flex;
flex-direction: row;
background-color:rgb(200, 200, 200);
border-radius: 1rem;
height: 4rem;
padding-top: 1rem;
/* align-items: center; */


`
export const ProfileCol = styled.div`
display: flex;
flex-direction: column;
text-align: center;
width: 30vw;

`
export const ColumnHead = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
`
export const ColumnData = styled.div`
font-size : 1rem;
`
export const UserName = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
`
export const AcceptInfo = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const AcceptMessage = styled.div`
    font-weight: 500;
`
export const Time = styled.div`
    font-size: 1rem;
`