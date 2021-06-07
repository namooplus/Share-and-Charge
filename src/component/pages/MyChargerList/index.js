import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BaseLayout, HeaderLayout, MenuLayout, HeaderLabel, ContentLayout, FooterLayout } from './components';
import Hamburger from '../../common/Hamburger';
import ShadowCardLive from './ShadowCardLive';
import ShadowButton from '../../common/ShadowButton';
import AppIcon from '../../common/AppIcon';

import axios from 'axios';
import { DOMAIN } from '../../../util/domain';

function MyChargerList(props) {
    const [myChargerList, setMyChargerList] = useState([0]);

    useEffect(() => {
        // 나의 공유 충전소 리스트 요청
        // axios.get('./tempData/myChargerList.json')
        axios.get(`${DOMAIN}/mypage/${localStorage.getItem('username')}`)
        .then(res => {
            setMyChargerList(res.data);
        })
        .catch(err => {
            setMyChargerList([1]);
        });
    }, []);

    return (
        <BaseLayout>
            <HeaderLayout>
                <MenuLayout>
                    <AppIcon width="40px" height="40px"/>
                    <Hamburger/>
                </MenuLayout>
                <HeaderLabel>나의 공유 충전소</HeaderLabel>
            </HeaderLayout>
            <ContentLayout>
                {myChargerList.map((data) => {
                    if (data === 0)
                        return <div style={{textAlign: 'center'}}>불러오는 중...</div>
                    else if (data === 1)
                        return <div style={{textAlign: 'center'}}>오류 : 나의 공유 충전소를 불러올 수 없습니다!</div>
                    else
                        return <ShadowCardLive key={data.charger_key} chargerData={data}/> 
                })}
            </ContentLayout>
            <FooterLayout>
                <Link style={{textDecoration: "none", color: "inherit"}} to="/registercharger">
                    <ShadowButton>추가하기</ShadowButton>
                </Link>
            </FooterLayout>
        </BaseLayout>
  );
}

export default MyChargerList;