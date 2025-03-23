import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>index to the app!</Text>
        </View>
    );
};

export default HomeScreen;
