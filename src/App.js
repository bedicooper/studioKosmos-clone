import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { MainContainer } from './Main/MainContainer';
import { toHome, toAuthor } from './routes';
import HomePage from './features/HomePage';
import AuthorPage from './features/AuthorPage';

function App() {
  return (
    <HashRouter>
      <Header />
      <MainContainer>
        <Switch>
          <Route path={toHome()}>
            <HomePage />
          </Route>
          <Route path={toAuthor()}>
            <AuthorPage />
          </Route>
          <Route path="/">
            <Redirect to={toHome()} />
          </Route>
        </Switch>
        <Footer />
      </MainContainer>
    </HashRouter>
  );
}

export default App;
