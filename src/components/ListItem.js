import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { images } from '../resources';
import ListItemStyles from '../styles/listItemStyle';

const ListItem = props => (
    <TouchableOpacity id={props.item.id} key={props.index} style={ListItemStyles.container} onPress={props.onPressItem} >
        <View style={ListItemStyles.thumbnailContainer}>
            <Image style={ListItemStyles.thumbnail} source={images.sample} />
        </View>
        <View style={ListItemStyles.bottomContainer} >
            <View style={ListItemStyles.roundedIcon}>
                <Image style={ListItemStyles.thumbnail} source={images.app_icon} />
            </View>
            <View>
                <Text>Sunnies Specs</Text>
                <Text style={{ color: 'gray' }}>Davies Tinsel</Text>
            </View>
        </View>
    </TouchableOpacity>
);

export default ListItem;