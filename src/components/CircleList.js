import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import CircleListItem from './CircleListItem';
import { fonts, images } from '../resources';

class CircleList extends PureComponent {
    render() {
        const { title, onPressItem, isCollapsible, data, listStyle, titleStyle, style } = this.props;
        return (
            <View style={[styles.container, style]} >
                <View style={styles.headerRow}>
                    {title && <Text style={[styles.title, titleStyle]}>{title}</Text>}
                    {isCollapsible && <TouchableOpacity style={styles.rightArrowContainer} onPress={onPressItem} >
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={images.forward} />
                        </View>
                    </TouchableOpacity>}
                </View>
                <FlatList
                    style={listStyle}
                    horizontal
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => `item-${index}`}
                    renderItem={({ item, index }) => <CircleListItem item={item} index={index} onPressItem={onPressItem} />}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    title: {
        fontSize: fonts.MEDIUM
    },
    rightArrowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    imageContainer: {
        height: 12,
        width: 12
    },
    image: {
        flex: 1,
        height: null,
        width: null
    }
});

export default CircleList;