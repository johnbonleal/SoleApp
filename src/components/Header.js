import React from 'react';
import { View, Text } from 'react-native';

const Header = props => (
    <View style={{ position: 'absolute', top: 0, width: '100%', height: 54, backgroundColor: '#FFF', elevation: 3, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{props.title}</Text>
    </View>
);

export default Header;