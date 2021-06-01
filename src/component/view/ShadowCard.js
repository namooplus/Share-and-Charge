import React from 'react';
import styled from 'styled-components';

function ShadowCard(props) {
  return (
    <Card>
        <img src={props.chargerImage} width="100%" height="170px"/>
        <DescriptionLayout>
            <Title>{props.chargerTitle}</Title>
            <Subtitle>{props.chargerDescription}</Subtitle>
            { props.type !== "self" ? 
            (<UserLayout>
                <UserIcon icon={props.chargerUserIcon}/>
                <UserLabel>{props.chargerUserLabel}</UserLabel>
            </UserLayout>) : null } 
        </DescriptionLayout>
    </Card>
  );
}

export default ShadowCard;

const Card = styled.div`
    background-color: white;
    box-shadow: 0 0px 20px #aaaaaa;
    transition: background-color 500ms;

    &:hover {
        background-color: lightgray;
    }
`
const DescriptionLayout = styled.div`
    padding: 15px;
`
const Title = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
`
const Subtitle = styled.h3`
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0;
    margin-top: 7px;
`
const UserLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    margin-top: 7px;
`
const UserIcon = styled.div`
    width: 25px;
    height: 25px;
    background-color: gray;
    border-radius: 50%;
`
const UserLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
    margin-left: 10px;
`