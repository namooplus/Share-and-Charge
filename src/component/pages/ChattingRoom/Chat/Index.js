import './index.css';

import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {
  SendBirdProvider,
  ChannelList,
  Channel,
  ChannelSettings,
} from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';

import ChannelPreview from './ChannelPreview';
import Message from './Message';
import getCustomPaginatedQuery from './CustomUserList';
import {ViewContext} from "./ViewContext"
export default function Chat({ userId, theme, nickname, useCustomQuery}) {
  
  const [showSettings, setShowSettings] = useState(false);
  const [currentChannelUrl, setCurrentChannelUrl] = useState(null);
  console.log(ViewContext);
  console.log(useContext(ViewContext));
  const {view, toggleview} = useContext(ViewContext);
  const changeView = ()=>{
    if (view) toggleview(false);
    else toggleview(true);
  }
  return (
    <div style={{ height: '100vh' }}>
      <SendBirdProvider
        appId={"261DB632-487D-4E3C-922F-6D453A33B82D"}
        theme={theme}
        userId={userId}
        nickname={nickname}
        userListQuery={
          useCustomQuery
            ? getCustomPaginatedQuery
            : null
        }
      >
        <div className="sendbird-app__wrap">
          <div className="sendbird-app__channellist-wrap">
            <ChannelList
              renderChannelPreview={ChannelPreview}
              onChannelSelect={(channel) => {
                if (channel && channel.url) {
                  setCurrentChannelUrl(channel.url);
                }
              }}
            />
          <button onClick={changeView}>channel</button>
          </div>
          <div className="sendbird-app__conversation-wrap" style={{transform: view? "translateX(0)":"translateX(100vw)"}}>
          <button onClick={changeView}>channel</button>

            <Channel
              renderChatItem={Message}
              channelUrl={currentChannelUrl}
              onChatHeaderActionClick={() => { setShowSettings(true); }}
            />
          </div>
        </div>
        {showSettings && (
          <div className="sendbird-app__settingspanel-wrap">
            <ChannelSettings
              channelUrl={currentChannelUrl}
              onCloseClick={() => { setShowSettings(false); }}
            />
          </div>
        )}
      </SendBirdProvider>
    </div>
  )
}
