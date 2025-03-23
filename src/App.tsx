/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './stores';
import { Text, View } from 'react-native';

function App(): React.JSX.Element {
    return (
        <Provider store={store}>
            <View>
                <Text>hell word 1</Text>
            </View>
        </Provider>
    );
}

export default App;
