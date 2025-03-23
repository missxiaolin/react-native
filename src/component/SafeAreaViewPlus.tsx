import React from 'react';
import { StyleSheet, View } from 'react-native';

export interface SafeAreaViewPlusProps {
    topColor?: string;
    bottomColor?: string;
    enablePlus?: boolean;
    topInset?: boolean;
    bottomInset?: boolean;
    style?: any;
    children?: React.ReactNode;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topArea: {
        height: 44,
    },
    bottomArea: {
        height: 34,
    },
});

export const GenSafeAreaViewPlus: React.FC<SafeAreaViewPlusProps> = props => {
    const { style, children } = props;

    return <View style={[styles.container, style]}>{children}</View>;
};

const GenSafeAreaView: React.FC<SafeAreaViewPlusProps> = props => {
    const { style, children } = props;

    return <View style={[styles.container, style]}>{children}</View>;
};

export const SafeAreaViewPlus: React.FC<SafeAreaViewPlusProps> = props => {
    const {
        topColor = 'transparent',
        bottomColor = '#f8f8f8',
        enablePlus = true,
        topInset = true,
        bottomInset = false,
        style,
        children,
    } = props;

    return enablePlus ? (
        <GenSafeAreaViewPlus
            topColor={topColor}
            bottomColor={bottomColor}
            topInset={topInset}
            bottomInset={bottomInset}
            style={style}
            children={children}
        />
    ) : (
        <GenSafeAreaView style={style} children={children} />
    );
};
