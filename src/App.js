import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import {
  HomePage,
  SingleCityPage
} from './pages';

import '../src/assets/styles/main.scss'

function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
         <Route exact path="/" component={HomePage} />
         <Route exact path="/city/:cityName" component={SingleCityPage} />
       </Switch>
      </Router>
    </div>
  );
}

export default App;
