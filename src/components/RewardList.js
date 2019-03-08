import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';
import RewardListItem from './RewardListItem';
import { NavigationService } from '../configs';
import { fonts, images } from '../resources';

class RewardList extends PureComponent {
    _onPressAllItems = data => {
        NavigationService.navigate("ViewAllRewards", data);
    }
    render() {
        const {
            title,
            isCollapsible,
            data,
            withIcon,
            style
        } = this.props;
        return (
            <View style={[styles.container, style]} >
                <View style={styles.header}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    {isCollapsible && <TouchableOpacity style={styles.headerRightContainer} onPress={() => this._onPressAllItems(data)} >
                        <Image style={styles.image} source={images.forward} />
                    </TouchableOpacity>}
                </View>
                <FlatList
                    style={{ marginLeft: 8 }}
                    horizontal
                    data={data}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => `item-${index}`}
                    renderItem={({ item, index }) => <RewardListItem item={item} withIcon={withIcon} />}
                />
            </View>
        )
    }
}

export default RewardList;

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