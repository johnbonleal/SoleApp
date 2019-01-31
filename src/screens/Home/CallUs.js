import React, { Component } from 'react';
import { View } from 'react-native';
import { TabularList } from '../../components';
import Logo from '../../components/Logo';
import { ContactUsData } from '../../utils/Data';

import { images } from '../../resources';

class CallUs extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Logo image={images.contact_call} text={"Call us"} />
                <View style={{ marginTop: 16 }}>
                    <TabularList
                        data={ContactUsData}
                        onPressItem={this._onPressItem}
                        withValue
                    />
                </View>
            </View>
        )
    }
}

export default CallUs;