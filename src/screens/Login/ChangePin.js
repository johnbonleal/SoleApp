import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet, StatusBar } from 'react-native';
import { Header } from '../../components';
import { Constants } from '../../configs';
import { images, fonts } from '../../resources';

const FormField = ({ title, onChangeText, value, style }) => (
    <View style={[{ flex: 1 }, style]}>
        <Text style={{ fontSize: fonts.EXTRA_SMALL, color: '#9B9B9B', marginVertical: 3 }}>{title}</Text>
        <View style={{flexDirection: 'row'}}>
        </View>
        <TextInput style={{ color: '#4A4A4A', fontSize: fonts.SMALL, borderWidth: 1, borderColor: '#DBDBDB', borderRadius: 8, marginVertical: 3, paddingHorizontal: 12, paddingVertical: 5 }} onChangeText={onChangeText} value={value}></TextInput>
    </View>
);

class ChangePin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: '',
            newPassword: ''
        };
    }
    render() {
        const { password, newPassword } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Header headerStyle={{ position: 'relative' }} title={"Change Password"} headerLeft={images.back} withBackground />
                <View style={{ flex: 1, alignItems: 'center', padding: 16 }}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={images.password_logo} />
                    </View>
                    <View style={{ marginVertical: 16 }}>
                        <Text>Please change your password for your protection</Text>
                        <Text>(minimum of 6 alphanumeric characters)</Text>
                    </View>
                    <View style={{ flex: 1, width: '100%', paddingHorizontal: 16, backgroundColor: 'tomato' }}>
                        <FormField title={"Enter your new password"} onChangeText={(password) => this.setState({ password })} value={password} />
                    </View>
                </View>

            </View>
        )
    }
}

export default ChangePin;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageContainer: {
        height: 169,
        width: 169,
        marginVertical: 16
    },
    image: {
        flex: 1,
        height: null,
        width: null
    }
});