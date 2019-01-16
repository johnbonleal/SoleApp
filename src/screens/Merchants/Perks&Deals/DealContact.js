import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DealDetails from '../DealDetails';
import { images, fonts } from '../../../resources';

const DealContact = ({ }) => (
    <View style={styles.container}>
        <Text style={styles.title}>Contact Details</Text>
        <DealDetails
            title={"beachhouse@gmail.com"}
            image={images.email}
            style={styles.deal}
            textStyle={{ color: '#000000' }}
        />
        <DealDetails
            title={"1241-12453-1235"}
            image={images.phone}
            style={styles.deal}
            textStyle={{ color: '#000000' }}
        />
    </View>
);

export default DealContact;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        padding: 16
    },
    title: {
        fontSize: fonts.MEDIUM,
        fontWeight: 'bold',
        marginBottom: 5
    },
    description: {
        fontSize: fonts.MEDIUM
    },
    deal: {
        marginVertical: 8, 
        alignItems: 'center'
    }
});