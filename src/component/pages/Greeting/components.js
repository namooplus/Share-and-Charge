import styled from 'styled-components/macro';

export const BaseLayout = styled.div`
    display: flex;
    height: 100vh;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 30px;
`
export const SplashLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 0;
    justify-content: center;
    align-items: center;
`
export const AppLabel = styled.h1`
    margin-top: 15px;
    font-size: 1.4rem;
`