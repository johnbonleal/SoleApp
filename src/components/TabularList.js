import React, { PureComponent } from 'react';
import { FlatList, View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../resources';

const ICON_HEIGHT = 30;

class TabularList extends PureComponent {
    render() {
        const { data, onPressItem, withIcons, collapsible, withValue, style, leftIconContainerStyle, leftIconStyle, rightIconStyle, titleStyle, descriptionStyle } = this.props;
        return (
            <FlatList
                style={style}
                data={data}
                keyExtractor={(item, index) => item.id}
                renderItem={({ item, index }) => <View key={item.id} style={styles.tabContainer} >
                    <TouchableOpacity style={styles.button} onPress={(() => onPressItem(item.title))}>
                        <View style={{ flexDirection: 'row' }}>
                            {withIcons && <View style={leftIconContainerStyle}>
                                <View style={[styles.imageContainer, leftIconStyle]}>
                                    <Image source={item.avatar} style={styles.image} />
                                </View>
                            </View>}
                            <View style={styles.bodyContainer}>
                                <Text style={[styles.title, titleStyle]}>{item.title}</Text>
                                {item.description && <Text style={[styles.description, descriptionStyle]}>{item.description}</Text>}
                            </View>
                        </View>
                        {withValue && <Text style={styles.value}>{item.value}</Text>}
                        {collapsible && <Ionicons name={"ios-arrow-forward"} size={fonts.REGULAR} color={'#000000'} />}
                    </TouchableOpacity>
                    {index < data.length - 1 && <View style={[styles.separator, rightIconStyle]} />}
                </View>}
            />
        )
    }
}

export default TabularList;

const styles = StyleSheet.create({
    tabContainer: {
        paddingHorizontal: 16,
        paddingBottom: 16
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageContainer: {
        height: ICON_HEIGHT,
        width: ICON_HEIGHT,
        borderRadius: ICON_HEIGHT / 2,
        backgroundColor: '#F7F7F7',
        overflow: 'hidden',
        marginHorizontal: 8
    },
    image: {
        flex: 1,
        height: null,
        width: null
    },
    bodyContainer: {
        alignSelf: 'center',
        marginLeft: 8
    },
    title: {
        fontSize: fonts.REGULAR,
        paddingVertical: 0
    },
    description: {
        fontSize: fonts.REGULAR,
        paddingVertical: 0
    },
    value: {
        fontSize: 15,
        color: '#9B9B9B'
    },
    separator: {
        height: 1,
        backgroundColor: '#D8D8D8',
        marginTop: 16
    }
});