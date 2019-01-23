import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import RectangleListItem from './RectangleListItem';
import { fonts, images } from '../resources';

class RectangleList extends PureComponent {
    render() {
        const { title, isCollapsible, onPressAll, onPressItem, data, withIcon, style } = this.props;
        return (
            <View style={[styles.container, style]} >
                <View style={styles.header}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    {isCollapsible && <TouchableOpacity style={styles.headerRightContainer} onPress={onPressAll} >
                        <Image style={styles.image} source={images.forward} />
                    </TouchableOpacity>}
                </View>
                <FlatList
                    style={{ marginLeft: 8 }}
                    horizontal
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item, index }) => <RectangleListItem key={index} item={item} onPressItem={onPressItem} withIcon={withIcon} />}
                />
            </View>
        )
    }
}

export default RectangleList;

const styles = StyleSheet.create({
    container: {
        height: 240,
        marginVertical: 16
    },
    title: {
        fontSize: fonts.MEDIUM,
        marginRight: 5
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
    headerRightContainer: {
        height: 12,
        width: 12
    },
    image: {
        flex: 1,
        height: null,
        width: null,
        tintColor: 'grey'
    }
});