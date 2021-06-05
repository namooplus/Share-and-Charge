import React from 'react';
import { withRouter } from 'react-router-dom';

import { BaseLayout, HeaderLayout, BackIcon, HeaderLabel, ContentLayout, Panel, UserLayout, UserIcon, UserLabel, Description, FooterLayout} from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ShadowButton from '../../common/ShadowButton';

function Payment(props) {
    const paymentData = props.location.state;
    if (!paymentData)
        props.history.goBack();

    return (
        <BaseLayout>
            <HeaderLayout>
                <BackIcon onClick={props.history.goBack}><FontAwesomeIcon icon={faArrowLeft}/></BackIcon>
                <HeaderLabel>결제</HeaderLabel>
            </HeaderLayout>
            <ContentLayout>
                <Panel>
                    <UserLayout>
                        <UserIcon/>
                        <UserLabel>User A</UserLabel>
                    </UserLayout>
                    <Description>
                        현재 크레딧 : 10000
                        <br/>
                        사용 크레딧 : 4950 (3시간 이용)
                        <br/>
                        결제 후 남은 크레딧 : 5050
                    </Description>
                </Panel>
                <FontAwesomeIcon icon={faArrowDown} size="lg"/>
                <Panel>
                    <UserLayout>
                        <UserIcon/>
                        <UserLabel>User B</UserLabel>
                    </UserLayout>
                </Panel>
            </ContentLayout>
            <FooterLayout>
                <ShadowButton>결제하기</ShadowButton>
            </FooterLayout>
        </BaseLayout>
    );
}

export default withRouter(Payment);
