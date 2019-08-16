import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';
import App from './app/App';

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

const rootElement: any = document.getElementById('root');

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    rootElement
);
