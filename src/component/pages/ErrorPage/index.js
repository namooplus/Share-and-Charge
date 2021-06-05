import React from 'react';
import { Link } from 'react-router-dom';

import { BaseLayout, ContentLayout, Warning } from './components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import ShadowButton from '../../common/ShadowButton';

function ErrorPage(props) {
    return (
        <BaseLayout>
            <ContentLayout>
                <FontAwesomeIcon icon={faExclamation} size="4x"/>
                <Warning>잘못된 접근</Warning>
            </ContentLayout>
            <Link style={{textDecoration: "none", color: "inherit"}} to="/">
                <ShadowButton>메인 페이지로 돌아가기</ShadowButton>
            </Link>
        </BaseLayout>
    );
}

export default ErrorPage;