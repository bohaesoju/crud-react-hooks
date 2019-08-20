import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { BoardView, App2 } from '../components';
import BoardWrap from '../containers/BoardWrap';
import BoardViewContainer from '../containers/BoardViewContainer';

const App = () => {
    return(
        <Router>
            <div>
                <Route exact path="/" component={ BoardWrap } />
                <Route path="/boardview" component={ BoardViewContainer } />
                <Route path="/App2" component={ App2 } />
            </div>
        </Router>
    )
};

export default App;
