import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Index from './Pages/Index/Index'
import Bio from './Pages/Bio/Bio'
import NotFound from './Pages/404/404'
import Shows from './Pages/Shows/Shows';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/bio' component={Bio} />
        <Route path='/shows' component={Shows} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
