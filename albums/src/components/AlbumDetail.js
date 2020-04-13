import React from 'react';
import {Text, View, Image, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ track }) =>{
    const { title, artist, thumbnail_image, image, url } = track;
    const { headerContentStyle, thumbnailStyle, thumbnailWrapperStyle, headerTextStyle, artWork} = styles
    return (
        <Card>
            <CardSection>
            <View style={thumbnailWrapperStyle}>
                <Image style={thumbnailStyle} source={{uri: thumbnail_image}}/>
            </View>
            <View style={headerContentStyle}>
            <Text style={headerTextStyle}>{artist}</Text>
            <Text>{title}</Text>
            </View>
            </CardSection>

            <CardSection>
                <Image style={artWork} source={{uri: image}}/>
            </CardSection>

            <CardSection>
                <Button onPress={()=> Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    )
}


const styles = {
    headerContentStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 20
    },
    thumbnailStyle: {
        height: 50,
        width:50
    },
    thumbnailWrapperStyle: {
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    artWork: {
        display: 'flex',
        flex: 1,
        height: 300,
        width: null
    }
}

export default AlbumDetail;
