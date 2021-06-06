import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import axios from 'axios';

function ShadowCardLive(props) {
    const [userRequest, setUserRequest] = useState({startTime: null, endTime: null, requestor: null});

    const acceptResponse = () => {
        // axios.get(`/admitByOwner/${props.chargerData.charger_key}/1`);
        setUserRequest({startTime: null, endTime: null, requestor: null});
        alert('사용자의 공유 요청을 수락하였습니다.');
    };
    const declineResponse = () => {
        // axios.get(`/admitByOwner/${props.chargerData.charger_key}/0`);
        setUserRequest({startTime: null, endTime: null, requestor: null});
        alert('사용자의 공유 요청을 거절하였습니다.');
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // axios.get(`/checkForOwner/${props.chargerData.charger_id}`)
            axios.get('./tempData/request.json')
            .then(res => {
                const requestData = res.data;
                setUserRequest({
                    startTime: requestData.starting_time,
                    endTime: requestData.ending_time,
                    requestor: requestData.email
                });
            })
            .catch(err => {
                setUserRequest({startTime: null, endTime: null, requestor: null});
            });
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    });
    return (
        <Card>
            <Link 
                style={{textDecoration: "none", color: "inherit"}} 
                to={{
                    pathname: "/detail",
                    state: props.chargerData
                }}>
                <ClickableLayout>
                    <Image src={props.chargerData.image_src}/>
                    <DescriptionLayout>
                        <Title>{`${props.chargerData.region_1depth_name} ${props.chargerData.region_2depth_name} ${props.chargerData.region_3depth_name}`}</Title>
                        <Subtitle>{`시간 당 ${props.chargerData.price_per_hour}원 | ${props.chargerData.available[0]}시 ~ ${props.chargerData.available[props.chargerData.available.length-1] + 1}시`}</Subtitle>
                    </DescriptionLayout>
                </ClickableLayout>
            </Link>
            {
                userRequest.requestor != null ? (
                    <CallbackLayout>
                        <Alert>
                            {userRequest.requestor}로부터 공유 요청이 들어왔습니다.<br/>
                            채팅 후 하단의 '수락' 혹은 '거절'을 선택해주세요.
                        </Alert>
                        <ButtonLayout>
                            <Button onClick={acceptResponse}>수락</Button>
                            <Button onClick={declineResponse}>거절</Button>
                        </ButtonLayout>
                    </CallbackLayout>
                ) : null
            }
        </Card>
    );
}

export default ShadowCardLive;

const Card = styled.div`
    background-color: white;
    box-shadow: 0 0px 20px #aaaaaa;
`
const ClickableLayout = styled.div`
    background-color: transparent;
    transition: background-color 500ms;

    &:hover {
        background-color: lightgray;
    }
`
const Image = styled.img`
    width: 100%;
    height: 170px;
    object-fit: cover;
`
const DescriptionLayout = styled.div`
    padding: 15px;
`
const Title = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    margin: 0;
`
const Subtitle = styled.h3`
    font-size: 0.8rem;
    font-weight: 400;
    margin: 7px 0;
`
const Alert = styled.h3`
    font-size: 0.9rem;
    font-weight: 400;
    margin: 0 0 5px 0;
    color: white;
`
const CallbackLayout = styled.div`
    background-color: red;
    padding: 15px;
`
const ButtonLayout = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    gap: 10px;
`
const Button = styled.button`
    background-color: white;
    border: none;
    padding: 7px 10px;
`