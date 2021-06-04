import React from 'react';

import { BaseLayout, HeaderLayout, MenuLayout, MenuIcon, HeaderLabel, ContentLayout } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ShadowSearch from '../../common/ShadowSearch';
import ShadowCard from '../../common/ShadowCard';
import AppIcon from '../../common/AppIcon';

import tempChargerImage from '../../../img/temp-charger-image.png';

function SearchChargerHome(props) {
    
    return (
        <BaseLayout>
            <HeaderLayout>
                <MenuLayout>
                    <AppIcon width="40px" height="40px"/>
                    <MenuIcon><FontAwesomeIcon icon={faBars}/></MenuIcon>
                </MenuLayout>
                <HeaderLabel>주변의 공유 충전소</HeaderLabel>
            </HeaderLayout>
            <ContentLayout>
                <ShadowSearch placeholder="원하는 지역의 공유 주차장을 입력하세요"/>
                <ShadowCard
                    chargerImage={tempChargerImage}
                    chargerTitle="충전소 A"
                    chargerDescription="15km | 시간 당 1650원 | 13:00~18:00"
                    chargerUserIcon
                    chargerUserLabel="User A"/>
                <ShadowCard 
                    chargerImage={tempChargerImage}
                    chargerTitle="충전소 B"
                    chargerDescription="15km | 시간 당 1760원 | 12:00~15:00"
                    chargerUserIcon
                    chargerUserLabel="User B"/>
                <ShadowCard
                    chargerImage={tempChargerImage}
                    chargerTitle="충전소 C"
                    chargerDescription="15km | 시간 당 1760원 | 12:00~15:00"
                    chargerUserIcon
                    chargerUserLabel="User C"/>
            </ContentLayout>
        </BaseLayout>
    );
}

export default SearchChargerHome;