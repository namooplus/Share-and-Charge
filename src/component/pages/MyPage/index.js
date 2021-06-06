import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BaseLayout, HeaderLayout, MenuLayout, HeaderLabel, ContentLayout, SubLabel } from './components';
import Hamburger from '../../common/Hamburger';
import ShadowCard from '../../common/ShadowCard';
import ShadowButton from '../../common/ShadowButton';
import AppIcon from '../../common/AppIcon';

import axios from 'axios';

function MyPage(props) {
    const [requestedList, setRequestedList] = useState([]);

    const checkRequestedList = async () => {
      let chargerIdList = [];
      let requestedListTemp = [];
      // 나의 충전소 아이디 불러오기
      // axios.get(`/user/${localStorage.getItem('username')}`)
      const list = await axios.get('./tempData/myChargerList.json');
      list.data.forEach(each => {
        chargerIdList.push(each.charger_key);
      });
      await chargerIdList.forEach(async each => {
        // axios.get(`/checkForOwner/${each}`)
        await axios.get(`./tempData/request.json`)
          .then((res) => {
            const requestedData = res.data;
            if (requestedData.email != null)
            {
              requestedListTemp.push({
                chargerKey: each,
                startTime: requestedData.starting_time,
                endTime: requestedData.ending_time,
                requestor: requestedData.email
              });
            }
          });
      });
      setRequestedList(requestedListTemp);
    };
        // .then(() => {
        //   setRequestedList(totalRequestList);
        //   console.log('어우');
        //   console.log(totalRequestList.length)
        // })
        // .catch(err => {
        //     setRequestedList([1]);
        // });
    // const getRequestingList = () => {
    //   // axios.get('/checkForOwner/${localStorage.getItem('username')}')
    //   axios.get('./tempData/myChargerList.json')
    //     .then(res => {
    //     })
    //     .catch(err => {
    //     });
    // };

    useEffect(() => {
      checkRequestedList();
    }, []);

    return (
        <BaseLayout>
            <HeaderLayout>
                <MenuLayout>
                    <AppIcon width="40px" height="40px"/>
                    <Hamburger/>
                </MenuLayout>
                <HeaderLabel>나의 정보</HeaderLabel>
            </HeaderLayout>
            <ContentLayout>
               <span>{localStorage.getItem('username')}</span>
              <SubLabel>나의 충전소에 들어온 요청 내역</SubLabel>
              {requestedList.map((data) => {
                console.log(data.chargerKey);
                return (
                  <span key={data.chargerKey}>{data.chargerKey} {data.startTime} {data.endTime} {data.requestor}</span>   
                  )
                })}
              <SubLabel>내가 요청한 공유 충전소</SubLabel>
                
            </ContentLayout>
        </BaseLayout>
  );
}

export default MyPage;