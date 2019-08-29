import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import config from '../../config';
import PostFeed from '../../components/container/PostFeed';


class InstaClone extends Component{
    
    render(){
        
        return(
            <View style={styles.container}>
                <View style={styles.tempNav}>
                    <Text>Instagram</Text>
                </View>
                <PostFeed />
            </View>
        )
    }
}


export default InstaClone;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: 100 + '%',
        height: 100 + '%',
    },
    tempNav:{
        width: 100 + '%', 
        height: 56,
        marginTop: 20,
        backgroundColor: 'rgba(250, 250, 250, 250)',
        borderBottomColor: 'rgba(233, 33, 233, 233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
})