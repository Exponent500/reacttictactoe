import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Root from 'Root';
import * as serviceWorker from './serviceWorker';

// For creating sprite file that is added to the <head> of index.html
const files = require.context('!svg-sprite-loader!./assets/svg', false, /.*\.svg$/);
files.keys().forEach(files);

ReactDOM.render(
    <Root>
        <App />
    </Root>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
