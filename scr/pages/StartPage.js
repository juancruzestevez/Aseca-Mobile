import React from 'react';
import {ImageBackground, StyleSheet, View, TouchableHighlight, Text} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Logo from "./components/Logo";

const StartPage = ({ navigation }) => {
    return (
        <SafeAreaProvider style={styles.container}>
            <ImageBackground source={require('../../assets/5c9f4573cab3b722695c5e570e2a8c90.jpeg')} style={styles.background}>
                <Logo/>
                <TouchableHighlight
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('Search')}>
                    <View style={styles.button}>
                        <Text style={styles.text}>Start searching</Text>
                    </View>
                </TouchableHighlight>
            </ImageBackground>
        </SafeAreaProvider>
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
    text: {
        color: 'white'
    },
    buttonContainer: {
        position: "relative",
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: '70%',
        borderRadius: 10,

    }
});

export default StartPage;