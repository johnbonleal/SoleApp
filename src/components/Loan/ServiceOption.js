import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import { Constants } from '../../configs';

const ServiceOption = ({ icon, title, subtitle, onPress, style }) => (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <View style={styles.iconContainer}>
            <View style={styles.icon}>
                <Image style={styles.image} source={icon} resizeMode={"contain"} />
            </View>
        </View>
        <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    </TouchableOpacity>
);

export default ServiceOption;

const styles = StyleSheet.create({
    container: {
        height: Constants.SCREEN_HEIGHT / 7, 
        width: '90%', 
        backgroundColor: '#FFFFFF', 
        flexDirection: 'row', 
        borderRadius: 8, 
        elevation: 3, 
        alignSelf: 'center'
    },
    iconContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    icon: {
        height: 40, 
        width: 40
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    content: {
        flex: 3, 
        justifyContent: 'center'
    },
    title: {
        fontSize: 20, 
        fontWeight: 'bold', 
        color: '#4AB7AA'
    },
    subtitle: {
        fontSize: 15, 
        color: '#4AB7AA'
    }
});