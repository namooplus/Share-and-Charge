import React from 'react';

import { BaseLayout, HeaderLayout, BackIcon, HeaderLabel, ContentLayout, MyChat, YourChat, FooterLayout, Input, SendIcon } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ChattingRoom(props) {
  return (
    <BaseLayout>
        <HeaderLayout>
            <BackIcon><FontAwesomeIcon icon={faArrowLeft}/></BackIcon>
            <HeaderLabel>OO와의 채팅</HeaderLabel>
        </HeaderLayout>
        <ContentLayout>
            <MyChat>A님이 충전소 A를 14:00~17:00 동안 사용하려고 합니다.</MyChat>
            <YourChat>충전소 입구가 좁아서 불편할 수 있는데 괜찮으신가요?</YourChat>
        </ContentLayout>
        <FooterLayout>
            <Input placeholder="메시지를 입력하세요"/>
            <SendIcon><FontAwesomeIcon icon={faPaperPlane}/></SendIcon>
        </FooterLayout>
    </BaseLayout>
  );
}

export default ChattingRoom;