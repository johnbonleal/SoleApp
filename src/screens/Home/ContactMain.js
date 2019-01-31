import React from 'react';
import { View} from 'react-native';
import ContactOption from './ContactOption';

import { images } from '../../resources';

const ContactMain = ({ onPressItem }) => (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
        <ContactOption image={images.contact_email} text={"Send us a message"} onPressItem={onPressItem} />
        <ContactOption image={images.contact_call} text={"Call us"} onPressItem={onPressItem} />
    </View>
);

export default ContactMain;