import React from 'react';

import { BaseLayout, BackIcon, HeaderLayout, ContentLayout, TitleInput, Description, Input, FooterLayout} from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ShadowButton from '../../common/ShadowButton';

function RegisterCharger(props) {
  return (
    <BaseLayout>
        <BackIcon><FontAwesomeIcon icon={faArrowLeft}/></BackIcon>
        <HeaderLayout>
            
        </HeaderLayout>
        <ContentLayout>
            <TitleInput placeholder="충전소 이름"/>
            <Description>
                위치 : <Input/>
                <br/>
                가격 : 시간 당 <Input/>
                <br/>
                사용가능시간 : <Input/>~<Input/>
                <br/>
                충전소 정보 : <Input/>
                <br/>
                공유자 메모 : <Input/>
            </Description>
        </ContentLayout>
        <FooterLayout>
            <ShadowButton>등록하기</ShadowButton>
        </FooterLayout>
    </BaseLayout>
  );
}

export default RegisterCharger;