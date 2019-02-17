import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';

const TEXTINPUT_HEIGHT = 56;

const FormField = ({ icon, placeholder, value, onChangeText }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={icon} resizeMode={'contain'} />
        </View>
        <TextInput
            placeholder={placeholder}
            placeholderTextColor={"#FFFFFF"}
            style={styles.input}
            onChangeText={() => onChangeText()}
            value={value}
        />
    </View>
);

export default FormField;

const styles = StyleSheet.create({
    container: {
        height: TEXTINPUT_HEIGHT, 
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: TEXTINPUT_HEIGHT / 2, 
        alignItems: 'center', 
        paddingVertical: 8, 
        paddingHorizontal: 16, 
        marginVertical: 12
    },
    imageContainer: {
        height: 24, 
        width: 24, 
        marginRight: 8
    },
    image: {
        flex: 1, 
        height: null, 
        width: null, 
        tintColor: '#FFFFFF'
    },
    input: {
        flex: 1, 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#FFFFFF'
    }
});