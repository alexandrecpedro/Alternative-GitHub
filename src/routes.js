import { Switch, Route } from 'react-router-dom';

import Error404 from './pages/Errors/Error404';
import Disabled from './pages/Errors/Disabled';
import IndexPage from './pages/Index';
import Profile from './pages/Profile';
import Pesquisa from './pages/Pesquisa';

function Routes() {
  return (
    <div className="container-lg">
      <Switch>
        <Route path='/' exact component={IndexPage} />
        <Route path='/perfil/:usuario' component={Profile} />
        <Route path='/perfil' component={Profile} />
        <Route path='/pesquisa' component={Pesquisa} />
        <Route path='/contact' component={Disabled} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default Routes;
