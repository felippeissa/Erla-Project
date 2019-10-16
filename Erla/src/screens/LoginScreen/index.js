import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class LoginScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    Pagina HomeScreen
                </Text>
                <TouchableOpacity>
                    <Text style={s.text2}>
                        Deslogar
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70,
    },
    text: {
        fontFamily: 'Verdana',
        color: "#212121",
        fontSize: 40,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text2: {
        fontFamily: 'Verdana',
        color: "#212121",
        fontSize: 20,
        padding: 20,
    },
});
export default LoginScreen;