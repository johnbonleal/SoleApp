import React, { Component } from 'react';
import { View, ScrollView, Image, Alert } from 'react-native';
import { Header } from '../../components';

import ContactMain from './ContactMain';
import SendMessage from './SendMessage';
import CallUs from './CallUs';
import ContactUserSignIn from './ContactUserSignIn';

import { images } from '../../resources';
import { NavigationService } from '../../configs/NavigationService';
class ContactUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: ''
        };
    }
    _onPressItem = (item) => {
        this.setState({ current: item })
    }
    _onPressBack = () => {
        const { current } = this.state;
        if (current === '') {
            NavigationService.back();
        } else {
            this.setState({ current: '' });
        }
    }
    render() {
        const { current } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    ref={(component) => { this.scrollView = component }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                >
                    <Header
                        headerTitle={"Contact Us"}
                        headerLeft={images.back}
                        headerStyle={{ position: 'relative' }}
                        onPressHeaderLeft={this._onPressBack}
                        withBackground
                    />
                    <View style={{ flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 16 }}>
                        {(() => {
                            switch (current) {
                                case 'Send us a message':
                                    return <SendMessage onPress={this._onPressItem} />;
                                case 'Call us':
                                    return <CallUs />;
                                case 'Required Information':
                                    return <ContactUserSignIn />;
                                default:
                                    return <ContactMain onPressItem={this._onPressItem} />;
                            }
                        })()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default ContactUs;