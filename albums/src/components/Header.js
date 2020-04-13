// import libraries to create components
import React from 'react';
import {Text, View} from 'react-native';

//create components

const Header = () => {
  const {textStyle, ViewStyle} = styles;
  return (
    <View style={ViewStyle}>
      <Text style={textStyle}>Albums Header</Text>
    </View>
  );
};

const styles = {
    ViewStyle: {
        backgroundColor: '#ab12ff',
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
export default Header;
