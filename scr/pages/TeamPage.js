import React, {useEffect} from 'react';
import axios from "axios";
import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    Modal,
    Pressable
} from 'react-native';

const TeamPage = ({route}) => {
    const [teamName, setTeamName] = React.useState("string")
    const [modalVisible, setModalVisible] = React.useState(false);
    const [playerName, setPlayerName] = React.useState("");
    const [pointScored, setPointScored] = React.useState(0);
    const [points2, setPoints2] = React.useState(0);
    const [points3, setPoints3] = React.useState(0);
    const [assists, setassists] = React.useState(0);
    const [players, setPlayers] = React.useState([])

    useEffect(() => {
        loadTeam()
    }, [])

    const loadTeam = () => {
        axios.get(
            'http://172.21.224.1:8080/team/get', {
                params: {
                    id: route.params.id
                }
            }
        ).then(async (res) => {
            setTeamName(res.data.teamName)
            setPlayers(res.data.players)
        }).catch((error) => {
            console.log(error);
        });
    }

    const getPlayerData = (id) => {
        axios.get(
            'http://172.21.224.1:8080/playerStat/getStat', {
                params: {
                    playerId: id
                }
            }
        ).then(async (res) => {
            setPlayerName(res.data.player.name)
            setPointScored(res.data.pointsScored)
            setPoints2(res.data.points2)
            setPoints3(res.data.points3)
            setassists(res.data.assists)
            setModalVisible(true)
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.header}>{teamName}</Text>
                <Text>Matches played: {route.params.matchesPlayed}</Text>
                <Text>Wins: {route.params.wins}</Text>
                <Text>Losses: {route.params.losses}</Text>
                <Text>Points in favour: {route.params.pointInFavour}</Text>
                <Text>Win streak: {route.params.winStreak}</Text>
                <Text style={styles.header2}>Players</Text>
                {players.map((result) => (
                    <View style={styles.btnContainer} key={result.id}>
                        <TouchableWithoutFeedback onPress={() => getPlayerData(result.id)}>
                            <View>
                                <Text style={styles.teamNameStyle}>{result.name}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                ))}
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Player: {playerName}</Text>
                        <Text style={styles.modalText}>PointScore: {pointScored}</Text>
                        <Text style={styles.modalText}>Points2: {points2}</Text>
                        <Text style={styles.modalText}>Points3: {points3}</Text>
                        <Text style={styles.modalText}>Assists: {assists}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Return</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
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
    },
    header2: {
        fontSize: 26,
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
    teamNameStyle: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
export default TeamPage;


