import React from 'react'
import { Provider } from 'react-redux';

import {Router,Route,browserHistory} from 'react-router'
import store from '../store/store';
import Layout from '../components/modules/Layout';
import HomePage from '../components/pages/HomePage';
import LoginPage from '../components/pages/LoginPage';


const storage = store()
export default class Application extends React.Component {
    render () {
        return (
            <Provider store={ storage }>
                <Router history={browserHistory}>

                    <Route path="/homepage" component={ HomePage } />
                    <Route path="/"  >
                        <Route path="/login" component={LoginPage} />
                    </Route>
                    <Route path="*" component={()=>{return<div>Sorry</div>}}/>

                </Router>
            </Provider>
        )
    }
}