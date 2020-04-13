import React from 'react';
import {View} from 'react-native';

const CardSection = (props) =>{
    const { containerStyle } = styles
    return (
        <View style={containerStyle}>
            {props.children}
        </View>
    )
}

const styles = {
    containerStyle: {
        borderWidth: 1,
        padding: 5,
        borderColor: '#ddd',
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
}

export default CardSection;
