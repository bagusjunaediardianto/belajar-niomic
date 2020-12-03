import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import App from './components/home/App';
import Contact from './components/home/page/Contact';

const AppRouter = ()=> {
        return(
            <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/halaman-contact">Kontak</Link>
                        </li>
                    </ul>
                </nav>
                <Route path="/" exact component={App}/>
                <Route path="/halaman-contact" component={Contact}/>
            </div>
            </Router>
        )
    }

export default AppRouter