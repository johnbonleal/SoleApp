import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

import { fonts } from '../resources';

const Branch = ({ data, onPressItem, style }) => (
    <View style={[{ flex: 1 }, style]}>
        <View style={{ paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#D8D8D8' }}>
            <Text style={{fontSize: 13, fontWeight: 'bold'}}>SELECT BRANCH</Text>
        </View>
        <FlatList
            data={data}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => <TouchableOpacity style={{ paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#D8D8D8' }} onPress={onPressItem}>
                <Text style={{ fontSize: fonts.MEDIUM, color: '#4A4A4A' }}>Alabang Town Center</Text>
                <Text style={{ fontSize: 15, color: '#9B9B9B' }}>G/F Libero tempore, cum soluta nobis</Text>
                <Text style={{ fontSize: 15, color: '#9B9B9B' }}>Alabang, Muntinlupa</Text>
            </TouchableOpacity>}
        />
    </View>

);

export default Branch;