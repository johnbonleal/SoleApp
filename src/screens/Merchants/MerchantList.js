import React, { PureComponent } from 'react';
import { FlatList, TouchableOpacity, ImageBackground, View, Text, StyleSheet } from 'react-native';
import { ImageLoader, StarRating } from '../../components';
import { Constants } from '../../configs';

import { images, fonts } from '../../resources';

const IMAGE_HEIGHT = 190;
const ICON_HEIGHT = 35;
const ratingObj = { ratings: 3 };

var _ = require('lodash');

class MerchantList extends PureComponent {
    state = {
        merchants: []
    }
    componentDidMount() {
        this._viewMerchants();
    }
    _viewMerchants = () => {
        const { data, searchText } = this.props;
        console.log("SearchText: ", searchText);
        let vendors = data;
        
    }
    render() {
        const { data, onPressItem } = this.props;
        return (
            <FlatList
                style={{ padding: 8 }}
                data={data}
                keyExtractor={(item, index) => `item-${index}`}
                renderItem={({ item, index }) => <View style={{ marginVertical: 8 }}>
                    <TouchableOpacity key={index} onPress={onPressItem}>
                        <ImageBackground source={images.image2} style={styles.banner} >
                            <View style={styles.dealContainer}>
                                <Text style={styles.deal}>10% OFF</Text>
                            </View>
                        </ImageBackground>
                        <View style={{ marginTop: 16, flexDirection: 'row' }}>
                            <View style={styles.companyLogo}>
                                <ImageLoader source={images.image2} style={styles.image} />
                            </View>
                            <View>
                                <Text style={styles.dealName}>One night staycation</Text>
                                <Text style={styles.company}>Beach House</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ marginRight: 5 }}>
                                        <StarRating ratingObj={ratingObj} />
                                    </View>
                                    <Text style={styles.reviewCount}>70</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>}
            />
        );
    }
}

export default MerchantList;

const styles = StyleSheet.create({
    container: {

    },
    banner: {
        height: IMAGE_HEIGHT, 
        width: '100%', 
        borderRadius: 8, 
        overflow: 'hidden'
    },
    dealContainer: {
        height: IMAGE_HEIGHT / 4, 
        backgroundColor: 'rgba(0,0,0,0.3)', 
        justifyContent: 'center', 
        alignItems: 'flex-end', 
        padding: 8
    },
    deal: {
        color: Constants.COLOR_WHITE, 
        fontWeight: 'bold', 
        fontSize: 18, 
        marginRight: 8
    },
    companyLogo: {
        height: ICON_HEIGHT, 
        width: ICON_HEIGHT, 
        borderRadius: ICON_HEIGHT / 2, 
        overflow: 'hidden', 
        marginRight: fonts.SMALL
    },
    image: {
        flex: 1, 
        height: null, 
        width: null
    },
    dealName: {
        fontSize: 18, 
        fontWeight: 'bold'
    },
    company: {
        fontSize: 15, 
        color: Constants.COLOR_LIGHT_GRAY
    },
    reviewCount: {
        fontSize: 12, 
        fontWeight: 'bold', 
        color: Constants.COLOR_LIGHT_GRAY
    }
});