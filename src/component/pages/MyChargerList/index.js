import React from 'react';

import { BaseLayout, HeaderLayout, MenuLayout, MenuIcon, HeaderLabel, ContentLayout, FooterLayout } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ShadowCard from '../../common/ShadowCard';
import ShadowButton from '../../common/ShadowButton';
import AppIcon from '../../common/AppIcon';

import tempChargerImage from '../../../img/temp-charger-image.png';

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