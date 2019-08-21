import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import BoardWrap from '../containers/BoardWrap';
import BoardViewContainer from '../containers/BoardViewContainer';

const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={ BoardWrap } />
                <Route path="/boardview" component={ BoardViewContainer } />
            </div>
        </Router>
    )
};

export default App;
