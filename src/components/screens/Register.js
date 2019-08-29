import React, { Component } from 'react'
import { Text, StyleSheet, Button, TextInput, View } from 'react-native'
import Config from '../../config'

export default class Register extends Component {
    constructor(){
        super();
        this.state={
            credentials:{
                email: "",
                password: ""
            }
        }
    }
    updateText(text, field){
        let newCredentials = Object.assign(this.state.credentials);
        newCredentials[field] = text;
        // this.setState({
        //     credentials: newCredentials
        // });
    }
    register(){
        //this.props.navigation.navigate('main');
        //alert(JSON.stringify(this.state.credentials))
        console.log(this.state.credentials);
        fetch(Config.baseUrl + "signup", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.credentials)
        })
        .then(response => response.json())
        .then(jsonResponse => {
            //JSON.stringify(JSON.stringify(jsonResponse))
            if(jsonResponse.confirmation === "success"){
                this.props.navigation.navigate('main')
            }
            else{
                throw new Error({
                    message: "try again"
                });
            }
        })
        .catch((err) => {
            alert(err.message)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {/* <Text> Registration Page </Text> */}
                <TextInput 
                    value={this.state.email}
                    placeholder='Email' 
                    style={styles.input} 
                    autoCorrect={false}
                    onChangeText={(text) => this.updateText(text, 'email')}
                />
                <TextInput 
                    value={this.state.password}
                    onChangeText={(text) => this.updateText(text, 'password')}
                    secureTextEntry
                    placeholder='Password'
                    style={styles.input} 
                    autoCorrect={false}
                />
                <Button
                    onPress={() => {
                        this.register()
                    }}
                    title="SignUp" 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
        container: {
        height: 100+'%',
        width: 100+'%',
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(252,61,57,252)'
        },
        input:{
            height: 50,
            width: 100 + '%',
            backgroundColor: 'rgba(255,255,255,255)',
            paddingHorizontal: 50,
            marginBottom: 10
        }
    }
)
