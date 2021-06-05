import React, {useContext} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

import Home from './component/pages/Greeting/index';
import SearchChargerHome from './component/pages/SearchChargerHome/index';
import MapView from './component/pages/MapView/index';
import MyChargerList from './component/pages/MyChargerList/index';
import ChargerDescription from './component/pages/ChargerDescription/index';
import RegisterCharger from './component/pages/RegisterCharger/index';
import ChattingRoom from './component/pages/ChattingRoom/index';
import Payment from './component/pages/Payment/index';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route exact path="/login" component={Greeting}/> */}
        <Route exact path="/map" component={MapView}/>
        <Route exact path="/mycharger" component={MyChargerList}/>
        <Route exact path="/detail" component={ChargerDescription}/>
        <Route exact path="/registercharger" component={RegisterCharger}/>
        <Route exact path="/chat" component={ChattingRoom}/>
        <Route exact path="/payment" component={Payment}/>
        <Route component={() => <Redirect to="/"/>} />
      </Switch>
    </Router>
  );
}

export default App;