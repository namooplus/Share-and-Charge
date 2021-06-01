import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import ShadowCard from '../view/ShadowCard';
import ShadowButton from '../view/ShadowButton';
import AppIcon from '../view/AppIcon';

import tempChargerImage from '../../img/temp-charger-image.png';

function MyChargerList(props) {
  return (
    <BaseLayout>
        <HeaderLayout>
            <MenuLayout>
                <AppIcon width="40px" height="40px"/>
                <MenuIcon><FontAwesomeIcon icon={faBars}/></MenuIcon>
            </MenuLayout>
            <HeaderLabel>나의 공유 충전소</HeaderLabel>
        </HeaderLayout>
        <ContentLayout>
            <ShadowCard
                chargerImage={tempChargerImage}
                chargerTitle="충전소 A"
                chargerDescription="15km | 시간 당 1650원 | 13:00~18:00"
                type="self"/>
            <ShadowCard 
                chargerImage={tempChargerImage}
                chargerTitle="충전소 B"
                chargerDescription="15km | 시간 당 1760원 | 12:00~15:00"
                type="self"/>
            <ShadowCard 
                chargerImage={tempChargerImage}
                chargerTitle="충전소 C"
                chargerDescription="15km | 시간 당 1760원 | 12:00~15:00"
                type="self"/>
        </ContentLayout>
        <FooterLayout>
            <ShadowButton>추가하기</ShadowButton>
        </FooterLayout>
    </BaseLayout>
  );
}

export default MyChargerList;

const BaseLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
`
const HeaderLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
    padding: 30px 30px 0 30px;
`
const MenuLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`
const MenuIcon = styled.div`
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
const HeaderLabel = styled.h1`
    margin: 0px;
    margin-top: 30px;
    font-size: 1.5rem;
`
const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    padding: 30px 30px 138px 30px;
    gap: 30px;
`
const FooterLayout = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 20px #aaaaaa;
`