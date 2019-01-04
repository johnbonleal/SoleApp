import React from 'react';
import { FlatList } from 'react-native';
import TabularListItem from './TabularListItem';

const TabularList = ({ data, onPressItem, withIcons, collapsible, style, leftIconContainerStyle, leftIconStyle, rightIconStyle, titleStyle, descriptionStyle }) => (
    <FlatList
        style={style}
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item, index }) => <TabularListItem item={item} index={index} onPressItem={onPressItem} withIcons={withIcons} collapsible={collapsible} leftIconContainerStyle={leftIconContainerStyle} leftIconStyle={leftIconStyle} rightIconStyle={rightIconStyle} titleStyle={titleStyle} descriptionStyle={descriptionStyle}/>}
    />
);

export default TabularList;