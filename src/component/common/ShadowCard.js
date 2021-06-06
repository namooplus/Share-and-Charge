import React from 'react';
import styled from 'styled-components/macro';

function ShadowCard(props) {
  return (
    <Card>
        <Image src={props.chargerImage}/>
        <DescriptionLayout>
            <Title>{props.chargerTitle}</Title>
            <Subtitle>{props.chargerDescription}</Subtitle>
            { props.type !== "self" ? <UserLabel>{props.chargerUserLabel}</UserLabel> : null } 
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
const Image = styled.img`
    width: 100%;
    height: 170px;
    object-fit: cover;
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
    margin: 7px 0;
`
const UserLabel = styled.span`
    font-size: 0.8rem;
    font-weight: 400;
`