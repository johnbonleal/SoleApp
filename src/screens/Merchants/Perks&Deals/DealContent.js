import React from 'react';
import { View, Dimensions } from 'react-native';
import DealTermsAndAbout from './DealTermsAndAbout';
import DealContact from './DealContact';
import MerchantLocation from '../MerchantLocation';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 14.6091;
const LONGITUDE = 121.0223;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const DealContent = () => (
    <View style={{ backgroundColor: '#FFFFFF' }}>
        <DealTermsAndAbout />
        <MerchantLocation region={{ latitude: LATITUDE, longitude: LONGITUDE, latitudeDelta: LATITUDE_DELTA, longitudeDelta: LONGITUDE_DELTA }} />
        <DealContact />
    </View>
);

export default DealContent;