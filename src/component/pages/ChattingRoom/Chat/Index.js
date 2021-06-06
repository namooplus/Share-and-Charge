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

  return (
    <>
      <button
        onClick={() => {
          const curl = userId + "_" + providerId;
          const url_list = [];
          axios
            .get("tempData/channel_list.json")
            .then((res) => {
              console.log(res.data);
              Object.keys(res.data).map((key) => {
                url_list.push(res.data[key]);
              });
              url_list.push(curl);
              console.log(url_list);
              for (var i = 0; i < url_list.length; i++) {
                let params = new sdk.GroupChannelParams();
                params.isPublic = false;
                params.isEphemeral = false;
                params.isDistinct = false;
                params.addUserIds([providerId, "mapoout@yonsei.ac.kr"]);
                params.name = url_list[i];
                createChannel(params)
                  .then((c) => {
                    console.log(url_list[i]);
                    setChannelUrl(url_list[i]);
                  })
                  .catch((c) => console.warn(c));
              }
            })
            .catch((res) => console.log(res));
         
        }}
      >
        {" "}
        Create channel
      </button>
      <button
        onClick={() => {
          leaveChannel(channelUrl)
            .then((c) => {
              setChannelUrl("");
            })
            .catch((c) => console.warn(c));
        }}
      >
        {" "}
        Leave channel
      </button>
      <br />
      {`Created channel is: ${channelUrl}`}
    </>
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
    <div style={{ height: "100vh" }}>
      <SendBirdProvider
        appId={"261DB632-487D-4E3C-922F-6D453A33B82D"}
        theme={theme}
        userId={userId}
        nickname={nickname}
        userListQuery={useCustomQuery ? getCustomPaginatedQuery : null}
      >
        <div className="sendbird-app__wrap">
          <div className="sendbird-app__channellist-wrap">
            <CustomComponentWithSendBird />
            <ChannelList
              renderChannelPreview={ChannelPreview}
              onChannelSelect={(channel) => {
                if (channel && channel.url) {
                  setCurrentChannelUrl(channel.url);
                }
              }}
            />
            <div>{providerId}</div>
            <button onClick={changeView}>channel</button>
          </div>
          <div
            className="sendbird-app__conversation-wrap"
            style={{ transform: view ? "translateX(0)" : "translateX(100vw)" }}
          >
            <button onClick={changeView}>channel</button>

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
