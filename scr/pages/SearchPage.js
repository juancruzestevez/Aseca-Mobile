import React, {useEffect} from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import axios from "axios";

const SearchPage = ({navigation}) => {
    const [leagues, setLeagues] = React.useState([])
    const [results, setResults] = React.useState([])

    useEffect(() => {
        loadLeagues()
    }, [])

    useEffect(() => {
        console.log(leagues);
    }, [leagues]);

    const loadLeagues = () => {
        axios.get(
            'http://localhost:8080/league/all'
        ).then(async (res) => {
            setLeagues(res.data)
            setResults(res.data)
        }).catch((error) => {
            console.log(error);
        });
    }

    const getResults = (e) => {
        const value = e.target.value;
        const filtered = leagues.filter((lgs) =>
            lgs.id.includes(value)
        )
        setResults(filtered)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.inner}>
                    <Text style={styles.header}>Search</Text>
                    <TextInput onChange={getResults} placeholder="League" style={styles.textInput} />
                    {results.map((result) => (
                        <View style={styles.btnContainer} key={result.id}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate("League", {id: result.id})}>
                                <Text>{result.leagueName}</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    ))}
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        marginTop: 28,
        padding: 24,
        flex: 1,
    },
    header: {
        fontSize: 36,
        marginBottom: 28,
    },
    textInput: {
        height: 40,
        borderColor: '#000000',
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        marginTop: 12,
        alignItems: "center",
        justifyContent: "center",
        fontsize: 20,
    },
});

export default SearchPage;