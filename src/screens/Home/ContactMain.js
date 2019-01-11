import React from 'react';
import { View} from 'react-native';
import ContactOption from './ContactOption';

import { images } from '../../resources';

const ContactMain = ({ onPressItem }) => (
    <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <ContactOption image={images.contact_email} buttonTitle={"Send us a message"} onPressItem={onPressItem} />
        <ContactOption image={images.contact_call} buttonTitle={"Call us"} onPressItem={onPressItem} />
    </View>
);

export default ContactMain;