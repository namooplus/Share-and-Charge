import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from "./component/pages/Greeting/index";
import SearchChargerHome from "./component/pages/SearchChargerHome/index";
import MapView from "./component/pages/MapView/index";
import MyChargerList from "./component/pages/MyChargerList/index";
import ChargerDescription from "./component/pages/ChargerDescription/index";
import RegisterCharger from "./component/pages/RegisterCharger/index";
import ChattingRoom from "./component/pages/ChattingRoom/index";
import Payment from "./component/pages/Payment/index";
import Menu from "./component/pages/Menu/index";
import { UserContext } from "./component/pages/context/UserNameContext";
import { TokenProvider } from "./component/pages/context/TokenContext";
import MyPage from "./component/pages/MyPage/index";
import RegisterUser from "./component/pages/RegisterUser/index";
import ErrorPage from "./component/pages/ErrorPage/index";
import CheckAuth from "./hoc/CheckAuth";

function App() {
  const [username, setUsername] = useState("default user");
  useEffect(()=>{console.log("appjs ", username); setUsername(localStorage.getItem("username"))}, [localStorage.getItem("username")])
  return (
    <TokenProvider>
      <UserContext.Provider value={{username, setUsername}}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/login" component={Greeting}/> */}
            <Route exact path="/map" component={CheckAuth(MapView, true)} />
            <Route exact path="/mycharger" component={CheckAuth(MyChargerList, true)} />
            <Route exact path="/detail" component={CheckAuth(ChargerDescription, true)} />
            <Route exact path="/registercharger" component={CheckAuth(RegisterCharger, true)} />
            <Route exact path="/chat" component={CheckAuth(ChattingRoom, true)} />
            <Route exact path="/payment" component={CheckAuth(Payment, true)} />
            <Route exact path="/menu" component={CheckAuth(Menu, true)} />
            <Route exact path="/mypage" component={CheckAuth(MyPage, true)} />
            <Route exact path="/signup" component={RegisterUser}/>
            <Route exact path="/error" component={ErrorPage}/>
            <Route component={() => <Redirect to="/error" />} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </TokenProvider>
  );
}

export default App;
