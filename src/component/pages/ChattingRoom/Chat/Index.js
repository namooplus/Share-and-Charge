import "./index.css";

import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  SendBirdProvider,
  ChannelList,
  Channel,
  ChannelSettings,
  withSendBird,
  sendBirdSelectors,
} from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import axios from "axios";
import ChannelPreview from "./ChannelPreview";
import Message from "./Message";
import getCustomPaginatedQuery from "./CustomUserList";
import { ViewContext } from "./ViewContext";

const channelUrl = process.env.CHANNEL_URL;

const CustomComponent = ({
  createChannel,
  sdk,
  leaveChannel,
  userId,
  providerId,
}) => {
  const [channelUrl, setChannelUrl] = useState("");
  const [show, setShow] = useState(true);

  return (
    show?
    <>
    <div className="create_channel_bg">

      <div className="create_channel_box">
        <div className="create_channel_message">
         <p className="provider_id">{"mapoout@naver.com"}</p>  <p>님과 채팅을 시작합니다</p>
        </div>
        <button
          className="create_channel_button"
          onClick={() => {
            const curl = userId + "_" + providerId;

            let params = new sdk.GroupChannelParams();
            params.isPublic = false;
            params.isEphemeral = false;
            params.isDistinct = false;
            params.addUserIds([providerId, "mapoout@yonsei.ac.kr"]);
            params.name = curl;
            createChannel(params)
              .then((c) => {
                console.log(curl);
                setChannelUrl(curl);
              })
              .catch((c) => console.warn(c));
            setShow(false);
          }}
        >
          {" "}
          Create channel
        </button>
      </div>
    </div>

     
    </> : <></>
  );
};

const CustomComponentWithSendBird = withSendBird(CustomComponent, (state) => {
  const createChannel = sendBirdSelectors.getCreateChannel(state);
  const leaveChannel = sendBirdSelectors.getLeaveChannel(state);
  const sdk = sendBirdSelectors.getSdk(state);
  const userId = localStorage.getItem("username");
  const providerId = localStorage.getItem("providerId");
  return { createChannel, sdk, leaveChannel, userId, providerId };
});
export default function Chat({
  userId,
  theme,
  nickname,
  useCustomQuery,
  providerId,
  toCreate,
}) {
  const [showSettings, setShowSettings] = useState(false);
  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);
  console.log(ViewContext);
  console.log(useContext(ViewContext));
  const { view, toggleview } = useContext(ViewContext);
  const changeView = () => {
    if (view) toggleview(false);
    else toggleview(true);
  };
  return (
    <div className="sendbird_wrapper">
      <SendBirdProvider
        appId={"261DB632-487D-4E3C-922F-6D453A33B82D"}
        theme={theme}
        userId={userId}
        nickname={nickname}
        userListQuery={useCustomQuery ? getCustomPaginatedQuery : null}
      >
        <div className="sendbird-app__wrap">
          <div className="sendbird-app__channellist-wrap">
            {toCreate ? <CustomComponentWithSendBird /> : <></>}

            <ChannelList
              renderChannelPreview={ChannelPreview}
              onChannelSelect={(channel) => {
                if (channel && channel.url) {
                  setCurrentChannelUrl(channel.url);
                }
              }}
            />
            <div>{providerId}</div>
          </div>
          <div
            className="sendbird-app__conversation-wrap"
            style={{
              transform: view ? "translateX(0)" : "translateX(-100vw)",
            }}
          >
            <button onClick={changeView} className="tolist"></button>

            <Channel
              renderChatItem={Message}
              channelUrl={currentChannelUrl}
              onChatHeaderActionClick={() => {
                setShowSettings(true);
              }}
            />
          </div>
        </div>
        {showSettings && (
          <div className="sendbird-app__settingspanel-wrap">
            <ChannelSettings
              channelUrl={currentChannelUrl}
              onCloseClick={() => {
                setShowSettings(false);
              }}
            />
          </div>
        )}
      </SendBirdProvider>
    </div>
  );
}
