import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { store } from './store';
import MainPage from './pages/MainPage';
import HistogramPage from './pages/HistogramPage';
import GroupsPage from './pages/GroupsPage';
import GroupPage from './pages/GroupPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage></MainPage>
          </Route>
          <Route exact path="/groups">
            <GroupsPage></GroupsPage>
          </Route>
          <Route path="/histogram">
            <HistogramPage></HistogramPage>
          </Route>
          <Route path="/groups/:placeId/:groupId">
            <GroupPage></GroupPage>
          </Route>
        </Switch>
      </Router>
      <CssBaseline />
    </Provider>
  );
}

export default App;
