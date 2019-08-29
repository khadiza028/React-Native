import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import config from '../../config';


class Post extends Component{
    constructor(){
        super();
        this.state = {
            liked: false,
            screenWidth: Dimensions.get('window').width
        };
    }

    LikeToggled(){
        this.setState({
            liked: !this.state.liked
        })
    }
    
    render(){
        const imageHeight = Math.floor(this.state.screenWidth * 1.1);
        const imageSelection = 
            this.props.item %2 == 0
                ? 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                : 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        const imageUri = imageSelection + "?h=" + imageHeight + "-c";

        const heartIconColor = this.state.liked ? 'rgba(252,61,57,252)' : null;

        return(
            <View style={{flex:1, width: 100 + '%'}}>
                <View style={styles.userBar}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image 
                            style={styles.userPic}
                            source={{
                                uri:'https://cdn.guidingtech.com/media/assets/WordPress-Import/2012/10/Smiley-Thumbnail.png'
                            }}
                        />
                        <Text style={{marginLeft: 10}}>Smile</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 30}}>...</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        this.LikeToggled();
                    }}>
                    <Image style={{width: this.state.screenWidth, height: 400}}
                        source={{
                            uri: imageUri
                    }} 
                    />
                </TouchableOpacity>

                <View style={styles.iconBar}>
                    <Image 
                        style={[
                            styles.icon, {height: 45, width: 45, tintColor: heartIconColor
                        }]} 
                        source={config.images.heartIcon} 
                    />
                    <Image 
                        style={[
                            styles.icon, {height: 36, width: 36}
                        ]} 
                        source={config.images.bubbleIcon} 
                    />
                    <Image 
                        resizeMode='stretch'
                        style={[
                            styles.icon, {height: 50, width: 40}
                        ]} 
                        source={config.images.arrowIcon} 
                    />
                </View>
                <View style={styles.commentBar}>
                    <Image 
                        style={[styles.icon,{height: 45, width: 45}]}
                        source={config.images.heartIcon}
                    />
                    <Text>128 Likes</Text>
                </View>
            </View>
        )
    }
}

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
    userBar:{
        width: 100 + '%',
        height: config.styleConstants.rowHeight,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    userPic:{
        height: 40,
        width: 40,
        borderRadius: 20
    },
    iconBar:{
        height: config.styleConstants.rowHeight,
        width: 100 + '%',
        borderColor: 'rgba(233, 233, 233, 233)',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon:{
        marginLeft: 5
    },
    commentBar:{
        width: 100 + '%',
        height:config.styleConstants.rowHeight,
        borderColor: 'rgba(233,233,233,233)',
        borderTopWidth:StyleSheet.hairlineWidth,
        borderBottomWidth:StyleSheet.hairlineWidth,
    }
})

export default Post;