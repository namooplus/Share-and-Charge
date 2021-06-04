import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Greeting from './component/pages/Greeting/index';
import SearchChargerHome from './component/pages/SearchChargerHome/index';
import MyChargerList from './component/pages/MyChargerList/index';
import ChargerDescription from './component/pages/ChargerDescription/index';
import RegisterCharger from './component/pages/RegisterCharger/index';
import ChattingRoom from './component/pages/ChattingRoom/index';
import Payment from './component/pages/Payment/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchChargerHome}/>
        <Route exact path="/login" component={Greeting}/>
        <Route exact path="/mycharger" component={MyChargerList}/>
        <Route exact path="/detail" component={ChargerDescription}/>
        <Route exact path="/registercharger" component={RegisterCharger}/>
        <Route exact path="/chat" component={ChattingRoom}/>
        <Route exact path="/payment" component={Payment}/>
      </Switch>
    </Router>
  );
}

export default App;