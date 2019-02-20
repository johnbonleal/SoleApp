import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { NavigationBar } from '../../components';
import { NavigationService } from '../../configs/NavigationService';
import { Constants } from '../../configs';

import { images, fonts } from '../../resources';

var moment = require('moment');

const BottomRowButton = ({ icon, text }) => (
    <TouchableOpacity style={styles.bottomRowButton} onPress={this._onPressContact}>
        <View style={styles.iconRoundBackground}>
            <View style={styles.iconContainer}>
                <Image style={styles.image} source={images.phone} resizeMode={'contain'} />
            </View>
        </View>
        <Text style={styles.bottomRowLabel}>{text}</Text>
    </TouchableOpacity>
);

class MyCard extends Component {
    _onPressContact = () => {
        NavigationService.navigate('ContactUs', { isAuthenticated: true });
    }
    _onPressTerms = () => {

    }
    render() {
        const { auth } = this.props;
        return (
            <ImageBackground style={styles.container} source={images.card_bg} resizeMode={'cover'}>
                <NavigationBar headerLeft={images.close} />
                <View style={{ height: '70%' }}>
                    <Text style={styles.cardTitle}>Prepaid Visa Card</Text>
                    <ImageBackground style={styles.card} source={images.prepaid_visa} resizeMode="cover">
                        <View style={styles.cardContent}>
                            <View style={styles.membershipIdContainer}>
                                <Text style={styles.membershipIdLabel}>Membership ID</Text>
                                <Text style={styles.membershipId}>{auth.data.user && auth.data.user.unique_key}</Text>
                            </View>
                            <View style={styles.cardDetailBottom}>
                                <Text style={styles.cardNumber}>{auth.data.user && auth.data.user.card_number}</Text>
                                <Text style={styles.memberName}>{`${auth.data.user && auth.data.user.first_name.toUpperCase()} ${auth.data.user && auth.data.user.last_name.toUpperCase()}`}</Text>
                                <View style={styles.validityContainer}>
                                    <View style={{ marginRight: 8 }}>
                                        <Text style={styles.validityLabel}>VALID</Text>
                                        <Text style={styles.validityLabel}>THRU</Text>
                                    </View>
                                    <Text style={styles.validityDate}>{moment(auth.data.user && auth.data.user.expiration_date, 'YYYY-MM-DD').format('MM/YY')}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.instruction}>Present this when asked by our merchant partner.</Text>
                    </ImageBackground>
                </View>
                <View style={styles.bottomRowContainer}>
                    <BottomRowButton text={"Contact Us"} icon={images.phone} />
                    <BottomRowButton text={"Read Terms and Conditions"} icon={images.book} />
                </View>
            </ImageBackground>
        )
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps)(MyCard);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    cardTitle: {
        fontSize: 25,
        color: Constants.COLOR_WHITE,
        fontWeight: 'bold',
        marginLeft: 20
    },
    card: {
        height: '79%',
        paddingHorizontal: 20
    },
    cardContent: {
        height: '60%',
        paddingHorizontal: 20,
        marginTop: 16
    },
    membershipIdContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    membershipIdLabel: {
        fontSize: 13,
        color: Constants.COLOR_WHITE,
        marginTop: 12
    },
    membershipId: {
        fontSize: 23,
        color: Constants.COLOR_WHITE
    },
    cardDetailBottom: {
        flex: 1,
        justifyContent: 'space-around'
    },
    cardNumber: {
        fontSize: 28,
        color: Constants.COLOR_WHITE
    },
    memberName: {
        fontSize: 18,
        color: Constants.COLOR_WHITE,
        fontWeight: 'bold'
    },
    validityContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    validityLabel: {
        fontSize: 7,
        color: Constants.COLOR_WHITE
    },
    validityDate: {
        fontSize: 19,
        color: Constants.COLOR_WHITE
    },
    instruction: {
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
        marginLeft: 4,
        marginTop: 16
    },
    bottomRowButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomColor: Constants.COLOR_SUPER_LIGHT_GRAY,
        borderBottomWidth: 1
    },
    iconRoundBackground: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#F5A623',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16
    },
    iconContainer: {
        height: 20,
        width: 20
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        tintColor: Constants.COLOR_WHITE
    },
    bottomRowLabel: {
        fontSize: fonts.SMALL,
        fontWeight: 'bold',
        color: Constants.COLOR_LIGHT_GRAY
    },
    bottomRowContainer: {
        height: Constants.SCREEN_HEIGHT / 6,
        backgroundColor: Constants.COLOR_WHITE,
        elevation: 10,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 2,
        shadowColor: 'black',
        shadowOpacity: 0.5
    }
});