// import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import CreateTamagotchi from './pages/CreateTamagotchi';
import Game from './pages/Game';
import './App.css';

function App() {
  return (
    <div className='App'>
   <Switch>
    <Route exact path='/' component={CreateTamagotchi} />
    <Route path='/game' component={Game} />
   </Switch>
    </div>
  );
}

export default App;
