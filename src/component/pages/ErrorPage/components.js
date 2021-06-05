import styled from 'styled-components/macro';

export const BaseLayout = styled.div`
    display: flex;
    height: 100vh;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
    padding: 30px;
    box-sizing: border-box;
`
export const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
`
export const Warning = styled.p`
    font-size: 1.2rem;
`