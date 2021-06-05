import React, { useEffect } from 'react';

import ErrorPage from "../component/pages/ErrorPage/index"

export default function (TargetComponent, option)
{
    // option : null -> 아무나 출입가능
    // option : true -> 로그인 사용자만 출입 가능
    // option : false -> 미로그인 사용자만 출입 가능

    function CheckAuth(props)
    {
        let valid = true;

        // 미로그인 사용자가 로그인 사용자용 페이지에 접근
        if (option == true && (localStorage.getItem('username') == null || localStorage.getItem('token') == null))
            valid = false;
        else if (option == false && (localStorage.getItem('username') != null && localStorage.getItem('token') != null))
            valid = false;

        return valid ? <TargetComponent/> : <ErrorPage/>;
    }
    return CheckAuth;
}