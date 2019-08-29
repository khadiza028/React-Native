import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createAppContainer, 
        createBottomTabNavigator, createStackNavigator} from "react-navigation";
import { MainFeed, Login, Camera, Profile, Register } from './components/screens';

//console.disableYellowBox = true;



const Tabs = createBottomTabNavigator({
    feed: MainFeed,
    camera: Camera,
    profile: Profile
})

const IntroStack = createStackNavigator({
    login: Login,
    register: Register
})

const MainStackNav = createSwitchNavigator({
    intro: IntroStack,
    main: Tabs
});

const MainStack = createAppContainer(MainStackNav);

export default class InstaClone extends React.Component {
    render() {
      return (
        <View style={{ height: 100+'%', width: 100+'%' }}>
            <MainStack />
        </View>
      )
    }
}



