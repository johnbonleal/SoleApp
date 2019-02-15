import React from 'react';
import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import { Constants } from '../../configs';
import { images } from '../../resources';

const LoanNotification = ({ success }) => (
    <ImageBackground style={styles.container} source={success ? images.availa_summary_background : images.availa_summary_error}>
        <View style={styles.titleContainer}>
            <View style={styles.imageContainer}>
                <Image style={[styles.image, { tintColor: Constants.COLOR_WHITE }]} source={images.checked} />
            </View>
            <Text style={styles.title}>{success ? "Completed" : "Cancelled"}</Text>
        </View>
        {success ?
            <View>
                <Text style={styles.text}>We have received your loan application.</Text>
                <Text style={styles.text}>We will process it shortly.</Text>
            </View> :
            <Text style={styles.text}>You have cancelled your loan application.</Text>
        }

    </ImageBackground>
);

export default LoanNotification;

const styles = StyleSheet.create({
    container: {
        height: Constants.SCREEN_HEIGHT / 5.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flexDirection: 'row',
        marginBottom: 12
    },
    imageContainer: {
        height: 24,
        width: 24,
        marginHorizontal: 12
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Constants.COLOR_WHITE
    },
    text: {
        fontSize: 15,
        color: Constants.COLOR_WHITE
    }
});