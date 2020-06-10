import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import home from './components/home';
import RegisterUser from './components/registerUser';
import orgPage from "./components/orgPage";
import contact from './components/contact';
import Error from "./components/error";
import Navigation from "./components/navigation";


class App extends Component {
    render(){
        return (
                <BrowserRouter>
                    <div>
                      <Navigation  />
                        <Switch>
                         <Route exact path="/" component={home} />
                         <Route path="/contact" component={contact}/>
                         <Route path="/registerUser" component={RegisterUser}/>
                         <Route path="/orgPage" component={orgPage}/>
                         <Route component={Error}/>
                       </Switch>
                    </div>
                </BrowserRouter>
        );
    }
}
export default App;
