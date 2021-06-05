import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { BaseLayout, BackIcon, HeaderLayout, ContentLayout, TitleInput, Description, Input, FooterLayout} from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faInfo } from "@fortawesome/free-solid-svg-icons";
import ShadowButton from '../../common/ShadowButton';

import axios from 'axios';

function RegisterCharger(props) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [info, setInfo] = useState("");
  const [memo, setMemo] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };
  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };
  const handleInfoChange = (event) => {
    setInfo(event.target.value);
  };
  const handleMemoChange = (event) => {
    setMemo(event.target.value);
  };
  
  const registerNewCharger = () => {
    // 서버로 새 충전소 등록
    const newCharger = {
      name: name,
      address: address,
      price: price,
      time: startTime + ':' + endTime,
      info: info,
      memo: memo
    }
    // axios.post('~~~~', newCharger);
    console.log(newCharger);
    alert('새 공유 충전소가 등록되었습니다.');

    // 메인 페이지로 이동
    props.history.push('/');
  };

  return (

    <BaseLayout>
        <BackIcon onClick={props.history.goBack}><FontAwesomeIcon icon={faArrowLeft}/></BackIcon>
        <HeaderLayout>
            
        </HeaderLayout>
        <ContentLayout>
            <TitleInput placeholder="충전소 이름" value={name} onChange={handleNameChange}/>
            <Description>
                위치 : <Input placeholder="주소" value={address} onChange={handleAddressChange}/>
                <br/>
                가격 : 시간 당 <Input style={{textAlign: "right"}} placeholder="(원)" value={price} onChange={handlePriceChange}/>
                <br/>
                사용가능시간 : <Input type="time" value={startTime} onChange={handleStartTimeChange}/>
                &nbsp;~&nbsp;
                <Input type="time" value={endTime} onChange={handleEndTimeChange}/>
                <br/>
                충전소 정보 : <Input placeholder="충전 전압" value={info} onChange={handleInfoChange}/>
                <br/>
                공유자 메모 : <Input placeholder="추가 정보" value={memo} onChange={handleMemoChange}/>
            </Description>
        </ContentLayout>
        <FooterLayout>
            <ShadowButton onClick={registerNewCharger}>등록하기</ShadowButton>
        </FooterLayout>
    </BaseLayout>
  );
}

export default withRouter(RegisterCharger);