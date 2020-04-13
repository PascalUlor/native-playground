// import libraries to create components
import React from 'react';
import {View, ScrollView} from 'react-native';
import { useAlbums } from '../Hooks/AlbumData';
import AlbumDetail from './AlbumDetail';

//create components

const AlbumList = () => {
  const {textStyle, ViewStyle} = styles;
  const trackList = useAlbums()
  return (
    <ScrollView>
        {trackList.map((track, index) => <AlbumDetail key={index} track={track}/>)}
    </ScrollView>
  );
};

const styles = {
    ViewStyle: {
        backgroundColor: '#F8F8F8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
  textStyle: {
    fontSize: 30,
  },
};

// Make components available to app
export default AlbumList;
