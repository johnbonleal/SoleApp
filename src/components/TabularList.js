import React from 'react';
import { FlatList } from 'react-native';
import TabularListItem from './TabularListItem';

const TabularList = ({ data, onPressItem, withIcons, collapsible, style }) => (
    <FlatList
        style={style}
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => <TabularListItem item={item} index={index} onPressItem={onPressItem} withIcons={withIcons} collapsible={collapsible} />}
    />
);

export default TabularList;