import React, { PureComponent } from 'react'
import { View, Picker, StyleSheet, TouchableOpacity, Text, FlatList } from 'react-native';
import { Constants } from '../configs';

var _ = require('lodash');

class Dropdown extends PureComponent {
    state = {
        isChildVisible: false,
        selectedValue: 'Select One...'
    }
    componentWillMount() {

    }
    componentWillUnmount() {

    }
    _toggleChildVisibility = () => this.setState({ isChildVisible: !this.state.isChildVisible });
    _onPressChild = (item) => {
        this._toggleChildVisibility();
        this.setState({ selectedValue: item });
    }
    render() {
        const { isChildVisible, selectedValue } = this.state;
        const { title, data, style } = this.props;
        return (
            <View>
                <Text style={styles.text}>{title} <Text style={{ color: 'red' }}>*</Text></Text>
                <TouchableOpacity style={styles.inputBox} onPress={this._toggleChildVisibility}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.text}>{selectedValue}</Text>
                    </View>
                </TouchableOpacity>
                {isChildVisible &&
                    <FlatList
                        ref={ref => { this.FlatList = ref }}
                        data={data}
                        style={styles.overlay}
                        renderItem={({ item, index }) => <TouchableOpacity key={index} style={{ padding: 16 }} onPress={() => this._onPressChild(item)}><Text style={styles.text}>{item}</Text></TouchableOpacity>}
                    />
                }
            </View>
        )
    }
}

export default Dropdown;

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#E5E5E5',
        height: 45,
        paddingHorizontal: 16,
        justifyContent: 'center',
        borderRadius: 3
    },
    dropdown: {
        flex: 1,
        height: Constants.BUTTON_HEIGHT,
        borderWidth: 2,
        backgroundColor: Constants.COLOR_DARK_GRAY
    },
    overlay: {
        // minHeight: Constants.BUTTON_HEIGHT,
        // maxHeight: 450,
        // height: 200,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'tomato',
        shadowColor: Constants.COLOR_BLACK,
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        elevation: 1,
        // padding: 16
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    }
})
