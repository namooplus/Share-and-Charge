import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import https from "https";
import {
  BaseLayout,
  HeaderLayout,
  MenuLayout,
  HeaderLabel,
  ContentLayout,
  SubLabel,
  Response,
  ProfileContainer,
  ProfileCol,
  ColumnHead,
  ColumnData,
  UserName,
  AcceptInfo,
  AcceptMessage,
  Time,
  AddCoin,
  AddCoinAmount,
  AddButton
} from "./components";
import Hamburger from "../../common/Hamburger";
import ShadowCard from "../../common/ShadowCard";
import ShadowButton from "../../common/ShadowButton";
import AppIcon from "../../common/AppIcon";
import { DOMAIN } from "../../../util/domain";
import axios from "axios";

function MyPage(props) {
  const [requestedList, setRequestedList] = useState([]);
  const [reservResponse, setReservResponse] =
    useState("You shouldn't have called this router.");
  const [response, setResponse] = useState("You shouldn't have called this router.");
  const [credit, setCredit] = useState("0");
  const [englishname, setEnglishName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [startingTime, setStartingTime] = useState("1");
  const [endingTime, setEndingTime] = useState("3");
  const [providerId, setProviderId] = useState("mapoout@gmail.com");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const [toAdd, setToAdd] = useState("");
  const addCoin = ()=>{
    axios.get( DOMAIN + "/purchase_coin/" + localStorage.getItem("username")+"/"+toAdd).then(
      (res)=>{
        console.log(res);
    setToAdd("");
    alert("충전이 완료되었습니다");

      }
    ).catch((error)=>{
      console.log(error);
    })
  }
  const handleAddCoin = (event) =>{
    setToAdd(event.target.value);
    event.preventDefault();
  }
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(reservResponse);
      axios
        .get(
          DOMAIN + "/checkForRequestor/" + localStorage.getItem("username"),
          { httpsAgent: agent }
        )
        .then((res) => {
          console.log(res);

          if (typeof res.data === "string") {
            if(localStorage.getItem("displaytime")!== null){
              localStorage.setItem("displaytime", localStorage.getItem("displaytime")-"1");
              if(localStorage.getItem("displaytime")==="0"){
                localStorage.removeItem("displaytime");
            setReservResponse(res.data);

              }
            }
            else{
              setReservResponse(res.data);
            }
          } else {
            localStorage.setItem("displaytime", "10");
            setReservResponse(JSON.stringify(res.data));
            setStartingTime(res.data.starting_time);
            setEndingTime(res.data.ending_time);
            setProviderId(res.data.email);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(DOMAIN + "/login?email=" + localStorage.getItem("username"))
        .then((res) => {
          console.log(res);
          setResponse(JSON.stringify(res));
          setCredit(res.data[0].coin);
          setEnglishName(res.data[0].name);
          setPhoneNumber(res.data[0].telephone_num);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  const renderSwitch = (param) => {
    switch (param) {
      case "0":
        return "something went wrong";
      case "your request was not accepted by provider.":
        return "❗ 제공자가 거절하였습니다 ❗";
      case "Your request was not regarded by provider yet.":
        return "❔ 제공자가 검토중입니다 ❔";
      case "3":
        return "";
      case "You shouldn't have called this router.":
        return (
          "요청한 내역이 없습니다."
        
        );
      default:
        return (
          <AcceptInfo>
          <AcceptMessage>
            {providerId} 님이 요청을 승인하였습니다.
          </AcceptMessage>
          <Time>
            사용시간 : {startingTime}시 ~ {endingTime}시 
          </Time>
        </AcceptInfo>
        );
    }
  };
  return (
    <BaseLayout>
      <HeaderLayout>
        <MenuLayout>
          <AppIcon width="40px" height="40px" />
          <Hamburger />
        </MenuLayout>
        <HeaderLabel>나의 정보</HeaderLabel>
      </HeaderLayout>
      <ContentLayout>
        <UserName>{localStorage.getItem("username")}</UserName>
        <ProfileContainer>
          <ProfileCol>
            <ColumnHead>이름</ColumnHead>
            <ColumnData>{englishname}</ColumnData>
          </ProfileCol>
          <ProfileCol>
            <ColumnHead>크레딧</ColumnHead>
            <ColumnData>{credit}</ColumnData>
          </ProfileCol>
          <ProfileCol>
            <ColumnHead>전화번호</ColumnHead>
            <ColumnData>{phoneNumber}</ColumnData>
          </ProfileCol>
        </ProfileContainer>
        <SubLabel>내가 요청한 공유 충전소</SubLabel>
        <Response>{renderSwitch(reservResponse)}</Response>
        <HeaderLabel>충전하기</HeaderLabel>
        <AddCoin>
          <AddCoinAmount
          placeholder="충전할 금액을 입력해주세요" type="number" step="10000"
          onChange={handleAddCoin}
          value={toAdd}

          />

          
          <AddButton onClick={addCoin}>충전</AddButton>
          
        </AddCoin>
      </ContentLayout>
    </BaseLayout>
  );
}

export default MyPage;
