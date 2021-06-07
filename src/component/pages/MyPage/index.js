import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  BaseLayout,
  HeaderLayout,
  MenuLayout,
  HeaderLabel,
  ContentLayout,
  SubLabel,
  Response,
} from "./components";
import Hamburger from "../../common/Hamburger";
import ShadowCard from "../../common/ShadowCard";
import ShadowButton from "../../common/ShadowButton";
import AppIcon from "../../common/AppIcon";
import { DOMAIN } from "../../../util/domain";
import axios from "axios";

function MyPage(props) {
  const [requestedList, setRequestedList] = useState([]);
  const [reservResponse, setReservResponse] = useState("dd324");
  const [response, setResponse] = useState("dd");
  useEffect(() => {
    const interval = setInterval(() => {
      console.log(reservResponse);
      axios
        // .get(DOMAIN+"/checkForRequestor/"+localStorage.getItem("username"))
        .get("tempData/reservation.json")
        .then((res) => {
          setReservResponse(res.data.response);
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 50000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios
  //       .get(DOMAIN+"/login?email="+localStorage.getItem("username"))
  //       .then((res) => {
  //         console.log(res)
  //         setResponse(res);
  //       });
  //   }, 10000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);
  const renderSwitch = (param) => {
    switch (param) {
      case "0":
        return "something went wrong";
      case "1":
        return "❗ 제공자가 거절하였습니다 ❗";
      case "2":
        return "❔ 제공자가 검토중입니다 ❔";
      case "3":
        return "";
      default:
        return param;
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
        <span>{localStorage.getItem("username")}</span>
        {requestedList.map((data) => {
          console.log(data.chargerKey);
          return (
            <span key={data.chargerKey}>
              {data.chargerKey} {data.startTime} {data.endTime} {data.requestor}
            </span>
          );
        })}
        <SubLabel>내가 요청한 공유 충전소</SubLabel>
        <Response>{renderSwitch(reservResponse)}</Response>
        {/* <div>{response}</div> */}
      </ContentLayout>
    </BaseLayout>
  );
}

export default MyPage;
