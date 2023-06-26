import React, {useEffect} from 'react';
import axios from "axios";
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

// android application id = com.julianrecio.asecamobile

const LeaguePage = ({route, navigation}) => {
    const [teams, setTeams] = React.useState([])

    useEffect(() => {
        loadLeague()
        order()
    }, []);

    const loadLeague = () => {
        axios.get(
            'http://172.21.224.1:8080/leagueTable/get', {
                params: {
                    leagueId: route.params.id
                }
            }
        ).then(async (res) => {
            setTeams(res.data)
            console.log(res.data)
        }).catch((error) => {
            console.log(error);
        });
    }

    const order = () => {
        const listaClonada = [...teams];
        listaClonada.sort((a, b) => {
            if (a.winPercentage < b.winPercentage) {
                return -1;
            }
            if (a.winPercentage > b.winPercentage) {
                return 1;
            }
            return 0;
        });
        setTeams(listaClonada);
    }

    const generateUniqueId = (result) => {
        return `team_${result.id}`;
    };
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.header}>{route.params.leagueName}</Text>
                <Text style={styles.header2}>Teams</Text>
                {teams.map((result) => (
                    <View style={styles.btnContainer} key={result.id}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("Team", {
                            id: result.id,
                            matchesPlayed: result.matchesPlayed,
                            wins: result.wins,
                            losses: result.losses,
                            pointInFavour: result.pointInFavour,
                            winStreak: result.winStreak})
                        } testID={generateUniqueId(result)}
                            >
                            <View>
                                <Text style={styles.teamNamestyle}>{result.team.teamName}</Text>
                                <Text style={styles.teamDatastyle}>matchesPlayed: {result.matchesPlayed} wins: {result.wins} losses: {result.pointInFavour}</Text>
                                <Text style={styles.teamDatastyle}>pointInFavour: {result.pointInFavour} winStreak: {result.winStreak}</Text>
                                <Text style={styles.teamDatastyle}>win percentage: {result.winPercentage}%</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        marginTop: 28,
        marginBottom: 28,
        padding: 24,
        flex: 1,
    },
    header: {
        fontSize: 36,
        marginBottom: 28,
    },
    header2: {
        fontSize: 26,
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
        alignItems: 'flex-start',
        backgroundColor:'#a4a4a4',
        borderRadius: 10,
        padding: 10,
    },
    teamNamestyle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    teamDatastyle: {
        fontSize: 18,
        fontWeight: 'bold',
    }
});
export default LeaguePage;


