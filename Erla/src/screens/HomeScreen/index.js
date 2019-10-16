import React, { Component } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    handleCreateAccountPress = () => {
        this.props.navigation.navigate('LoginScreen');
    };

    render() {
        return (
            <View style={s.container}>
                <View style={s.container}>
                    <Text style={s.text}>
                        Erla Project
                    </Text>
                </View>
                <View style={s.container}>
                    <TouchableOpacity onPress={this.handleCreateAccountPress}>
                        <Text style={s.text2}>
                            Fazer Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={s.text2}>
                            Registrar
                        </Text>
                    </TouchableOpacity>
                </View>
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
export default HomeScreen;

