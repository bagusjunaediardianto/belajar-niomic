import React, {Component} from 'react';
import App from './component/App';
import {BrowserRouter as Router, Route} from 'react-router-dom';

class AppRouter extends Component{
    render(){
        return (
            <div>
                <Router>
                    <Route path="/Home" exact component={App} />
                </Router>
            </div>
        )
    }
}

export default AppRouter