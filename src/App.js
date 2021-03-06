import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import EventRegistration from './components/EventRegistration/EventRegistration';
import BookedEvents from './components/BookedEvents/BookedEvents';
import AddEvent from './components/AddEvent/AddEvent';
import AllBookedEvents from './components/AllBookedEvents/AllBookedEvents';
import AuthProvider from './contexts/AuthProvider';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import About from './components/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Admin from './components/Admin/Admin';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <ScrollToTop />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/event/:id">
              <EventRegistration />
            </PrivateRoute>
            <PrivateRoute path="/my-events">
              <BookedEvents />
            </PrivateRoute>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </ AuthProvider>
    </div>
  );
}

export default App;
