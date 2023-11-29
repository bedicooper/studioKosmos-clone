import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { MainContainer } from './MainContainer';
import { Wrapper } from './Wrapper/Wrapper';
import { toHome, toContact, toAbout, toAuthor } from './routes';
import HomePage from './features/HomePage';
import AboutPage from './features/AboutPage';
import ContactPage from './features/ContactPage';
import AuthorPage from './features/AuthorPage';

function App() {
  return (
    <HashRouter>
      <MainContainer>
        <Header />
        <Wrapper>
          <Switch>
            <Route path={toHome()}>
              <HomePage />
            </Route>
            <Route path={toAbout()}>
              <AboutPage />
            </Route>
            <Route path={toContact()}>
              <ContactPage />
            </Route>
            <Route path={toAuthor()}>
              <AuthorPage />
            </Route>
            <Route path="/">
              <Redirect to={toHome()} />
            </Route>
          </Switch>
          <Footer />
        </Wrapper>
      </MainContainer>
    </HashRouter>
  );
}

export default App;
