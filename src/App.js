import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Greeting from './component/layout/Greeting';
import SearchChargerHome from './component/layout/SearchChargerHome';
import MyChargerList from './component/layout/MyChargerList';
import ChargerDescription from './component/layout/ChargerDescription';
import RegisterCharger from './component/layout/RegisterCharger';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SearchChargerHome}/>
        <Route exact path="/login" component={Greeting}/>
        <Route exact path="/mycharger" component={MyChargerList}/>
        <Route exact path="/detail" component={ChargerDescription}/>
        <Route exact path="/registercharger" component={RegisterCharger}/>
        <Route exact path="/chat" component={Temp}/>
        <Route exact path="/payment" component={Temp}/>
      </Switch>
    </Router>
  );
}

function Temp(props) {
  return <div>임시</div>;
}

export default App;

const styledButton = styled.button`
  padding: 2px
`
