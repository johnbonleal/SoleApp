import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Logo from '../../components/Logo';

import { images, fonts } from '../../resources';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const TEXTINPUT_CONTAINER_HEIGHT = 40;
const BUTTON_HEIGHT = 56;

const FormField = ({ label, value }) => (
    <View style={{ marginVertical: 8 }}>
        <Text style={{ fontSize: 15, color: '#9B9B9B' }}>{label}</Text>
        <View style={{ height: TEXTINPUT_CONTAINER_HEIGHT, borderRadius: 8, borderColor: '#D8D8D8', borderWidth: 1, marginVertical: 5 }}>
            <TextInput style={{ paddingHorizontal: 8 }} value={value} />
        </View>
    </View>
)
class ContactUserSignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: 'John Bon Jovirick Leal',
            email: 'johnbon.leal@email.com',
            position: 'Software Engineer',
            company: 'Venteny Inc',
            country: 'PH'
        }
    }
    render() {
        const { fullName, email, position, company, country } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#FFFFFF', padding: 16 }}>
                <Logo image={images.form} text={"Required Information"} />
                <View style={{ marginTop: SCREEN_HEIGHT / 18 }}>
                    <FormField label={"Full Name"} value={fullName} />
                    <FormField label={"Email"} value={email} />
                    <FormField label={"Position"} value={position} />
                    <FormField label={"Company"} value={company} />
                    <FormField label={"Country"} value={country} />
                    <View style={[styles.buttonContainer, {marginVertical: 18}]}>
                        <TouchableOpacity style={styles.button} onPress={() => onPress('Required Information')}>
                            <Text style={styles.buttonText}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default ContactUserSignIn;

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