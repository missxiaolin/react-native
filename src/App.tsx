/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './stores';
import RootView from './router';

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <RootView />
        </Provider>
    );
}

export default App;
