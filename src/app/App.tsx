import * as React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { BoardViewContainer, BoardWrap } from '../containers/';
import '../style/style.scss';

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
