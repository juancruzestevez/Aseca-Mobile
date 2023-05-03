import React from 'react';
import {ImageBackground, StyleSheet, Button, Alert, View, TouchableHighlight, Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Logo from "./components/Logo";


const SearchPage = () => {
    return (

    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        width: '100%',

    },
    container: {
        flex: 1,
    },
});

export default SearchPage;