import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Header } from '../../components';

import ContactMain from './ContactMain';
import SendMessage from './SendMessage';
import CallUs from './CallUs';

import { images } from '../../resources';
import { NavigationService } from '../../configs/NavigationService';

const HEADER_MAX_HEIGHT = 90;

class ContactUs extends Component {
    state = {
        current: ''
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
                    contentContainerStyle={{ flexGrow: 1 }}
                    scrollEventThrottle={16}
                >
                    <Header
                        headerTitle={"Contact Us"}
                        headerLeft={current === '' ? images.close : images.back}
                        onPressHeaderLeft={this._onPressBack}
                    />
                    <View style={{ height: HEADER_MAX_HEIGHT }} >
                        <Image style={{ flex: 1, height: null, width: null }} source={images.header_bg} />
                    </View>
                    <View style={{ flex: 1, padding: 16 }}>
                        {(() => {
                            switch (current) {
                                case 'Send us a message':
                                    return <SendMessage />;
                                case 'Call us':
                                    return <CallUs />;
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