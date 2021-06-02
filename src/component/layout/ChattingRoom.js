import React from 'react';
import styled from 'styled-components/macro';
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

const BaseLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: stretch;
`
const HeaderLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    padding: 30px 30px 0 30px;
`
const BackIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: transparent;
    border-radius: 50%;
    font-size: 1.5rem;
    color: black;
    transition: background-color 500ms;

    &:hover {
        background-color: lightgray;
    }
`
const HeaderLabel = styled.h1`
    margin: 0px;
    margin-top: 30px;
    font-size: 1.5rem;
`
const ContentLayout = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: stretch;
    padding: 30px 30px 95px 30px;
    gap: 20px;
`
const MyChat = styled.div`
    width: 60%;
    padding: 15px 20px;
    background-color: #A8FAEA;
    color: black;
    box-shadow: 0 0 20px lightgray;
    border-radius: 10px;
    align-self: flex-end;
    font-size: 0.9rem;
`
const YourChat = styled.div`
    width: 60%;
    padding: 15px 20px;
    background-color: #FAF7A8;
    color: black;
    box-shadow: 0 0 20px lightgray;
    border-radius: 10px;
    align-self: flex-start;
    font-size: 0.9rem;
`
const FooterLayout = styled.div`
    position: fixed;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    bottom: 0;
    width: 100%;
    padding: 15px;
    box-sizing: border-box;
    background-color: white;
    box-shadow: 0 0 20px #aaaaaa;
    gap: 5px;
`
const Input = styled.input`
    height: 35px;
    flex: 1 1 0;
    border:none;
    border: 1px solid lightgray;
    padding: 0 15px;
    font-size: 0.9rem;

    &:focus {
        outline: none;
    }
`
const SendIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    background-color: transparent;
    font-size: 1.3rem;
    color: black;
    transition: background-color 500ms;

    &:hover {
        background-color: lightgray;
    }
`