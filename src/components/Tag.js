import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Tag = ({ title, style, textStyle, onPress }) => (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
        <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

export default Tag;

const styles = StyleSheet.create({
    container: { 
        borderColor: '#FFFFFF', 
        borderRadius: 8, 
        borderWidth: 1, 
        paddingVertical: 3, 
        paddingHorizontal: 12 
    },
    title: { 
        color: '#FFFFFF' 
    }
});