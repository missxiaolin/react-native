import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
const WelcomeScreen: React.FC = () => {
    const navigation = useNavigation();

    const goHome = () => {
        //
    };
    React.useEffect(() => {
        //
        setTimeout(() => {
            navigation.replace('Home');
        }, 3000);
        return () => {
            //
        };
    }, [navigation]);
    return (
        <View style={styles.container}>
            <Text onPress={() => goHome()}>Welcome to the app11!</Text>
        </View>
    );
};

export default WelcomeScreen;
