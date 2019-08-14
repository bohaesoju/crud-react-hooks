import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { App1, App2 } from '../components';
import BoardWrap from '../containers/BoardWrap';

const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={ BoardWrap } />
                <Route path="/App1" component={ App1 } />
                <Route path="/App2" component={ App2 } />
            </div>
        </Router>
    )
};

export default App;
