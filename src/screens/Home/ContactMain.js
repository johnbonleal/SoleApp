import React from 'react';
import { View } from 'react-native';
import { TabularList } from '../../components';

const ContactMain = ({onPressItem}) => (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: 8, paddingVertical: 16 }}>
        <TabularList
            collapsible
            data={[{ title: "Send us a message" }, { title: "Call us" }]}
            onPressItem={onPressItem}
        />
    </View>
);

export default ContactMain;