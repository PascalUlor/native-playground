import React from 'react';
import {Text, View, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ track }) =>{
    const { title, artist, thumbnail_image, image } = track;
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
