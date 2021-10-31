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

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/event/:id">
              <EventRegistration />
            </Route>
            <PrivateRoute path="/my-events">
              <BookedEvents />
            </PrivateRoute>
            <Route path="/about">
              <About />
            </Route>
            {/* <PrivateRoute path="/add-event">
              <AddEvent />
            </PrivateRoute>
            <PrivateRoute path="/manage-booked-event">
              <AllBookedEvents />
            </PrivateRoute> */}
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
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
