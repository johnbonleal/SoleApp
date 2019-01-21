import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RectangleListItem from './RectangleListItem';
import { fonts } from '../resources';

const RectangleList = ({title, isCollapsible, onPressAll, onPressItem, data, withIcon}) => (
    <View style={styles.container} >
        <View style={styles.header}>
            {title && <Text style={{ fontSize: fonts.MEDIUM }}>{title}</Text>}
            {isCollapsible && <TouchableOpacity style={styles.headerRightContainer} onPress={onPressAll} >
                <Text style={styles.headerRightText}>SEE ALL</Text>
                <Ionicons name={"ios-arrow-forward"} size={12} color={"#D8D8D8"} />
            </TouchableOpacity>}
        </View>
        <FlatList
            style={{ marginLeft: 8 }}
            horizontal
            data={data}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => <RectangleListItem key={index} item={item} onPressItem={onPressItem} withIcon={withIcon} />}
        />
    </View>
);

export default RectangleList;

const styles = StyleSheet.create({
    container: {
        height: 240, 
        marginVertical: 16
    },
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingHorizontal: 16
    },
    headerRightContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    },
    headerRightText: {
        color: '#000000', 
        fontSize: fonts.EXTRA_SMALL, 
        color: 'gray', 
        marginRight: 8
    }
});