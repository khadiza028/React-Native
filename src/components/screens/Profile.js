import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'


export default class Profile extends Component {
    login(){
        this.props.navigation.navigate('main');
    }
    render() {
        return (
            <TouchableOpacity 
                style={styles.container} onPress={() => this.login()} 
            >
                <Text> Future Profile </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
        container: {
        height: 100+'%',
        width: 100+'%',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
        }
    }
)
