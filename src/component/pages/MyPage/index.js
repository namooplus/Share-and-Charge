import React, { useContext, useState } from "react";

import { UserContext } from "../context/UserNameContext";
import { TokenContext } from "../context/TokenContext";
import { AppIcon } from "../../common/AppIcon";
import { Wrapper, Profile, Credit, UserImage, UserName } from "./components";
import axios from "axios";
function MyPage() {
  const { username } = useContext(UserContext);
  const { token } = useContext(TokenContext);
  const [imgsrc, setImgsrc] = useState("");
  const [credit, setCredit] = useState("");

  axios
    .get("tempData/userdata.json")
    .then((res) => {
      setImgsrc(res.data.profile_img);
      console.log(imgsrc);
      setCredit(res.data.credit);
    })
    .catch((err) => console.log(err));
  return (
    <Wrapper>
      <Profile>
        <UserImage alt="user img" src={imgsrc} />
        <Credit>credit {credit}</Credit>
      </Profile>
      <UserName>
          {username}
      </UserName>
     
    </Wrapper>
  );
}

export default MyPage;
