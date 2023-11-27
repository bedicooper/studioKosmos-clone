import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import { MainContainer } from './Main/MainContainer';
import { toHome } from './routes';
import HomePage from './features/HomePage';

function App() {
  return (
    <HashRouter>
      <Header />
      <MainContainer>
        <Switch>
          <Route path={toHome()}>
            <HomePage />
          </Route>
          <Route path="/">
            <Redirect to={toHome()} />
          </Route>
        </Switch>
      </MainContainer>
    </HashRouter>
  );
}

export default App;
