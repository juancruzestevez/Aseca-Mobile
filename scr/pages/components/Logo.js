import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


const StartPage = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/kisspng-basketball-silhouette-netball-court-5b490d6fd7e231.1640645415315142238843.png')} style={styles.image}/>
            <Text style={styles.text} >Basketball</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.2,
        flexDirection: 'row',
        height: 100,
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',
        width: '75%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 200,
    },
    text: {
        color: 'black',
        fontSize: 32,
        lineHeight: 64,
        fontWeight: 'bold',
        textAlign: 'center',


    },
    image: {
        left: 0,
        width: 100,
        height: 100,
        backgroundColor: 'transparent',
        resizeMode: 'cover'
    },
});

export default StartPage;