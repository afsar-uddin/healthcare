import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import LoginRegister from './Components/LoginRegister/LoginRegister'
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetail from './Components/ServiceDetail/ServiceDetail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/login-register">
              <LoginRegister></LoginRegister>
            </Route>

            <PrivateRoute path="/service/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
