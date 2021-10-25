import Homepage_30 from './pages/Homepage_30';
import { Switch, Route } from 'react-router-dom';
import ShopTwo_30 from './pages/ShopTwoPage_30';
import ContactPage_30 from './pages/ContactPage_30';
import SigninPage_30 from './pages/SigninPage_30';
import Header_30 from './pages/Header_30';

import './App_30.scss';

function App_30() {
  return (
    <div>
      <Header_30 />
      <Switch>
        <Route exact path='/' component={Homepage_30} />
        <Route exact path='/shop_30' component={ShopTwo_30} />
        <Route exact path='/contact_30' component={ContactPage_30} />
        <Route exact path='/signin_30' component={SigninPage_30} />
      </Switch>
    </div>
  );
}

export default App_30;
