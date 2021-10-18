import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

      </Router>
    </div>
  );
}

export default App;
