import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { MainContainer } from './MainContainer';
import { Wrapper } from './Wrapper/Wrapper';
import { toHome, toPortfolio, toContact, toAbout, toAuthor, toHotels, toAparments, toHouses, toOffice } from './routes';
import HomePage from './features/HomePage';
import PortfolioPage from './features/Portfolio/PortfolioPage';
import AparmentsPage from './features/Portfolio/PortfolioPage/AparmentsPage';
import HousesPage from './features/Portfolio/PortfolioPage/HousesPage';
import OfficePage from './features/Portfolio/PortfolioPage/OfficePage';
import HotelsPage from './features/Portfolio/PortfolioPage/HotelsPage';
import ProjectPage from './features/Portfolio/ProjectPage';
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
            <Route path="/projekt/:title">
              <ProjectPage />
            </Route>
            <Route path={toHome()}>
              <HomePage />
            </Route>
            <Route path={toPortfolio()}>
              <PortfolioPage />
            </Route>
            <Route path={toAparments()}>
              <AparmentsPage />
            </Route>
            <Route path={toHouses()}>
              <HousesPage />
            </Route>
            <Route path={toOffice()}>
              <OfficePage />
            </Route>
            <Route path={toHotels()}>
              <HotelsPage />
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
