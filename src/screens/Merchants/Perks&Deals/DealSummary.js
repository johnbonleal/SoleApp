import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DealDetails from '../DealDetails';
import { NavigationService, Constants } from '../../../configs';
import { images } from '../../../resources';

class DealSummary extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
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
    }
}

export default DealSummary;

const styles = StyleSheet.create({
    container: {
        height: Constants.DEALS_SUMMARY_HEIGHT,
        backgroundColor: '#000000',
        paddingHorizontal: 16
    }
});