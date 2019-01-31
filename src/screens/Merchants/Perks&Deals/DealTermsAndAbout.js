import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../../../resources';

const DealTermsAndAbout = () => (
    <View style={styles.container}>
        <View style={{ marginVertical: 8 }}>
            <Text style={styles.title}>Terms & Conditions</Text>
            <Text style={styles.description}>• Libero tempore, cum soluta nobis</Text>
            <Text style={styles.description}>• Soluta nobis est eligendi optio</Text>
            <Text style={styles.description}>• Optio cumque nihil impedit quo minus id</Text>
        </View>
        <View style={styles.separator} />
        <View style={{ marginVertical: 8 }}>
            <Text style={styles.title}>About Beach House</Text>
            <Text style={styles.description} numberOfLines={4}>
                Excepteur qui enim deserunt commodo do. Incididunt non magna anim sit est do. Eiusmod laborum amet aliqua sunt ex excepteur aliquip sunt quis ea occaecat velit incididunt. Magna culpa laborum nulla sint laborum enim mollit elit officia excepteur sit. Proident occaecat reprehenderit non adipisicing mollit reprehenderit. Commodo excepteur ad aliquip amet magna nostrud deserunt do veniam fugiat.
        </Text>
        </View>
    </View>
);

export default DealTermsAndAbout;

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    title: {
        fontSize: fonts.MEDIUM,
        fontWeight: 'bold',
        marginBottom: 5
    },
    description: {
        fontSize: fonts.MEDIUM,
        color: '#9B9B9B',
        marginLeft: 8
    },
    separator: {
        height: 1, 
        backgroundColor: '#D8D8D8', 
        marginVertical: 16
    }
});