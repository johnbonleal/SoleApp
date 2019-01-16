import React from 'react';
import { View, TouchableOpacity, Text, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DealDetails from '../DealDetails';
import { NavigationService } from '../../../configs/NavigationService';
import { images } from '../../../resources';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const DealSummary = ({ }) => (
    <View style={{ height: SCREEN_HEIGHT / 5, backgroundColor: '#000000', paddingHorizontal: 16 }}>
        <DealDetails
            title={"Mandaluyong, BGC, Cal..."}
            subtitle={<TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => NavigationService.navigate('MerchantBranch')}>
                <Text style={{ fontSize: 12, color: 'grey', marginRight: 5 }}>SEE ALL BRANCHES</Text>
                <Ionicons name={"ios-arrow-forward"} size={16} color={'grey'} />
            </TouchableOpacity>}
            image={images.location_dark}
            style={{ marginVertical: 8 }}
        />
        <DealDetails
            title={"25% OFF on published rate (room only)"}
            image={images.percentage}
            style={{ marginVertical: 8 }}
        />
        <DealDetails
            title={"Place notes here"}
            image={images.clipboard}
            style={{ marginVertical: 8 }}
        />
    </View>
);

export default DealSummary;