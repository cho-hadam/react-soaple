import React from 'react';
import ReactDOM from 'react-dom';
import UserProfileList from './Chapter11/UserProfileList';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<UserProfileList />, document.getElementById('root'));

serviceWorker.unregister();
