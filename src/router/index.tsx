import React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../pages/index/Index';
import WelcomeScreen from '../pages/welcome/Welcome';

const RootStack = createNativeStackNavigator({
    initialRouteName: 'Welcome',
    screens: {
        Welcome: {
            screen: WelcomeScreen,
            header: null,
        },
        Home: HomeScreen,
    },
});

const Navigation = createStaticNavigation(RootStack);

const RootView: React.FC = () => {
    return <Navigation />;
};

export default RootView;
