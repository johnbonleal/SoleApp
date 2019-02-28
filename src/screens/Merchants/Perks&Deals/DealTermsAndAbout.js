import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { fonts } from '../../../resources';

const DealTermsAndAbout = ({ content }) => (
    <View style={styles.container}>
        <View style={{ marginVertical: 8 }}>
            <Text style={styles.title}>Terms & Conditions</Text>
            {
                (content && content.merchant_terms_and_conditions.length > 0) &&
                content.merchant_terms_and_conditions.map((item) => (
                    <Text key={item.id} style={styles.description}>{`• ${item.terms}`}</Text>
                ))
            }
        </View>
        <View style={styles.separator} />
        <View style={{ marginVertical: 8 }}>
            <Text style={styles.title}>{`About ${content && content.name}`}</Text>
            <Text style={styles.description} numberOfLines={4}>
                {content && content.description}
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