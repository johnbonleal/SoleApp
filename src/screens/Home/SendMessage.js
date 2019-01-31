import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../../components/Logo';
import { images, fonts } from '../../resources';

const BUTTON_HEIGHT = 56;
class SendMessage extends Component {
    render() {
        const { onPress } = this.props;
        return (
            <View style={{ flex: 1, padding: 16, backgroundColor: '#FFFFFF' }}>
                <Logo image={images.contact_email} text={"Send us a message"} />
                <View style={{ flex: 1, marginVertical: 5 }}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Write a message"
                        placeholderTextColor="grey"
                        numberOfLines={10}
                        multiline
                        textAlignVertical={"top"}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={()=>onPress('Required Information')}>
                        <Text style={styles.buttonText}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default SendMessage;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-end'
    },
    button: {
        height: BUTTON_HEIGHT, 
        width: '30%', 
        backgroundColor: '#FFA701', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderRadius: BUTTON_HEIGHT / 2
    },
    buttonText: {
        fontSize: fonts.MEDIUM, 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        textAlign: 'center'
    }
});