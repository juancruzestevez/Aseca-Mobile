import React from 'react';
import {ImageBackground, StyleSheet, Button, Alert} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Logo from "./components/Logo";


const StartPage = () => {
    return (
        <SafeAreaProvider style={styles.container}>
            <ImageBackground source={require('../../assets/5c9f4573cab3b722695c5e570e2a8c90.jpeg')} style={styles.background}>
                <Logo/>
                <Button
                    style={styles. button}
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </ImageBackground>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    button: {
        position: "absolute",
        bottom: 10,
    },
    container: {
        flex: 1,
    }

});

export default StartPage;