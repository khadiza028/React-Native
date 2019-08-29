import React, { Component } from 'react'
import { Text, StyleSheet, View} from 'react-native'
import InstaClone from './src/InstaClone';

console.disableYellowbox = true;


export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <InstaClone />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3D3D3'
    }
});



