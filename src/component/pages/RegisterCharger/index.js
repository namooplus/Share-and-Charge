/*global kakao*/
import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { BaseLayout, BackIcon, HeaderLayout, ContentLayout, EachLayout, Label, Map, Input, Button, FooterLayout} from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faInfo } from "@fortawesome/free-solid-svg-icons";
import FileUploader from '../../common/FileUploader';
import ShadowButton from '../../common/ShadowButton';
import ShadowPicker from '../../common/ShadowPicker';

import axios from 'axios';
import { DOMAIN } from '../../../util/domain';

function RegisterCharger(props) {
  const [imageURL, setImageURL] = useState(null);
  const [address, setAddress] = useState("");
  const [addressA, setAddressA] = useState("");
  const [addressB, setAddressB] = useState("");
  const [addressC, setAddressC] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [price, setPrice] = useState("");
  const [startTime, setStartTime] = useState(9);
  const [endTime, setEndTime] = useState(15);

  const convertToPosition = () => {
    // 지도 생성
    const location = new kakao.maps.LatLng(37.565770, 126.938545);
    let container = document.getElementById('charger-map-detail');
    let options = {
      center: location,
      level: 2
    };
    const map = new kakao.maps.Map(container, options);

    // 지도에 마커 표시
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function(result, status) {
       if (status === kakao.maps.services.Status.OK) 
       {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
  
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords
        });
        map.setCenter(coords);

        setLatitude(result[0].y);
        setLongitude(result[0].x);
        setAddressA(address.split(' ')[0]);
        setAddressB(address.split(' ')[1]);
        setAddressC(address.split(' ')[2]);
      }
      else
      {
        alert('해당 주소를 찾을 수 없습니다.');
        setLatitude(null);
        setLongitude(null);
        setAddressA('');
        setAddressB('');
        setAddressC('');
      }
    });   
  };

  const handleFile = (image) => {
    if (image && image.size < 5000000)
    {
      const formData = new FormData();
      formData.append('image', image);
      axios.post('https://api.imgur.com/3/image', formData, {
        headers: {
          Authorization: "Client-ID 1807fa16af23099",
          Accept: "application/json"
        }
      })
      .then((res) => {
        const result = res.data;

        if (result.success)
        {
          console.log(result.data.link);
          setImageURL(result.data.link);
          alert('사진 업로드에 성공하였습니다.');
        }
        else
        {
          setImageURL(null);
          alert('사진 업로드에 실패하였습니다.');
        }
      })
      .catch((err) => {
        setImageURL(null);
        alert('사진 업로드에 실패하였습니다.' + err.message);
      });
    }
    else
    {
      setImageURL(null);
      alert('허용 가능한 파일 용량을 초과하였습니다.');
    }
  }
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleStartTimeChange = (event) => {
    setStartTime(parseInt(event.target.value));
  };
  const handleEndTimeChange = (event) => {
    setEndTime(parseInt(event.target.value));
  };
  
  const registerNewCharger = () => {
    // 충전소 정보 validation 확인
    if (imageURL == null || address == '' || addressA == '' || addressB == '' || addressC == ''
      || latitude == null || longitude == null || price == '' || startTime >= endTime)
      {
        alert('충전소 정보가 모두 작성되지 않았거나 올바르지 않은 형식의 정보가 있습니다.');
        return;
      }

    // 서버로 새 충전소 등록
    axios.get(`${DOMAIN}/addCharger/${price}/${startTime}/${endTime - 1}/${longitude}/${latitude}/${address}/${addressA}/${addressB}/${addressC}/{imageURL}/${localStorage.getItem('username')}/${localStorage.getItem('englishname')}`)
    .then(res => {
      if (res.statusText == 'done')
        alert('새 공유 충전소가 등록되었습니다.');
      else
        alert('새 공유 충전소를 등록하는데 실패하였습니다.');
    })
    
    // 메인 페이지로 이동
    props.history.push('/');
  };

  return (
    <BaseLayout>
        <BackIcon onClick={props.history.goBack}><FontAwesomeIcon icon={faArrowLeft}/></BackIcon>
        <HeaderLayout>
          <FileUploader handleFile={handleFile}/>
        </HeaderLayout>
        <ContentLayout>
          <EachLayout>
            <Label>주소 :&nbsp;&nbsp;&nbsp;</Label>
            <Input placeholder="서울 서대문구 연세로 50" value={address} onChange={handleAddressChange}/>
            <Button onClick={convertToPosition}>찾기</Button>
          </EachLayout>
          <Map 
            style={{ opacity: latitude != null ? "1.0" : "0.2", transition: "opacity 500ms" }}
            id="charger-map-detail"/>
          <EachLayout>
            <Label>시간 당 가격 :&nbsp;&nbsp;&nbsp;</Label>
            <Input placeholder="10000" value={price} onChange={handlePriceChange}/>
            <Label>&nbsp;&nbsp;&nbsp;원</Label>
          </EachLayout>
          <EachLayout>
            <Label>사용 가능 시간 :&nbsp;&nbsp;&nbsp;</Label>
            <ShadowPicker value={startTime} onChange={handleStartTimeChange}/>
            &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
            <ShadowPicker value={endTime} onChange={handleEndTimeChange}/>
          </EachLayout> 
        </ContentLayout>
        <FooterLayout>
            <ShadowButton onClick={registerNewCharger}>등록하기</ShadowButton>
        </FooterLayout>
    </BaseLayout>
  );
}

export default withRouter(RegisterCharger);