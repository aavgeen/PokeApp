import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PokeStore from "./config/store";
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const FullApp = () => 
    <Provider store={PokeStore}>
        <App/>
    </Provider>
    
ReactDOM.render(<FullApp />, document.getElementById('root'));
registerServiceWorker();
