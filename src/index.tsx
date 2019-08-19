import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import App from './app/App';

const devTools =
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    rootReducer,
    devTools
);

const rootElement: any = document.getElementById('root');

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    rootElement
);
