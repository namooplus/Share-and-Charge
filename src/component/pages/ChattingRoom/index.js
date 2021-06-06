import React, { useState } from "react";
import {
    SendBirdProvider,
    withSendBird,
    Channel,
    ChannelList,
    OpenChannel,
    sendBirdSelectors,
} from "sendbird-uikit";
import { App as SendBirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import SendBird from "sendbird";
import { useLocation } from "react-router-dom";
import {
    BaseLayout,
    HeaderLayout,
    BackIcon,
    HeaderLabel,
    ContentLayout,
    MyChat,
    YourChat,
    FooterLayout,
    Input,
    SendIcon,
} from "./components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Chat from "./Chat/Index.js";
import { ViewContext } from "./Chat/ViewContext";
const appId = "261DB632-487D-4E3C-922F-6D453A33B82D";
const userId = localStorage.getItem("username");
const channelUrl = "mapoout_kyle";

function ChattingRoom(props) {
    const [config, setconfig] = useState({});
    const [view, toggleview] = useState(true);

    const location = useLocation();
    console.log(location);
    let toCreateChatRoom = true;
    // const toCreateChatRoom = location.state.tocreate;
    if (location.state !== undefined) {
        localStorage.setItem("providerId", location.state.provider.id);
        toCreateChatRoom = true;
    } else {
        toCreateChatRoom = false;
    }

    return (
        <BaseLayout>
            <ViewContext.Provider value={{ view, toggleview }}>
                <Chat
                    userId={userId}
                    nickname={userId}
                    providerId={
                        toCreateChatRoom ? location.state.provider.id : "none"
                    }
                    toCreate={toCreateChatRoom}
                />
            </ViewContext.Provider>
        </BaseLayout>
    );
}

export default ChattingRoom;
