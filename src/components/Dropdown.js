import React, { PureComponent } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, FlatList, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { Constants } from '../configs';

var _ = require('lodash');

class Dropdown extends PureComponent {
    state = {
        selectedValue: 'Select One...',
        animateY: new Animated.Value(0)
    }
    _startAnimation = () => {
        Animated.spring(this.state.animateY, {
            toValue: 100,
            friction: 5,
            tension: 30
        }).start();
    }
    _dismissAnimation = () => {
        Animated.spring(this.state.animateY, {
            toValue: 0,
            friction: 5,
            tension: 30
        }).start();
    }
    _onPressDropdown = () => {
        if (this.state.animateY._value === 0) {
            this._startAnimation();
        } else {
            this._dismissAnimation();
        }
    }
    _onPressChild = item => {
        this._dismissAnimation();
        this.setState({ selectedValue: item });
    }
    render() {
        const { selectedValue, animateY } = this.state;
        const { title, data, style } = this.props;
        const animateRotation = animateY.interpolate({
            inputRange: [0, 100],
            outputRange: ['0 deg', '180 deg'],
            extrapolate: 'clamp'
        });
        return (
            <View style={[{ flex: 1 }, style]}>
                <Text style={[styles.text, { marginBottom: 8 }]}>{title} <Text style={{ color: 'red' }}>*</Text></Text>
                <TouchableOpacity style={styles.inputBox} onPress={this._onPressDropdown}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.text}>{selectedValue}</Text>
                        <Animated.View style={{ justifyContent: 'center', transform: [{ rotate: animateRotation }] }}>
                            <Icon name="caretdown" size={20} color={Constants.COLOR_DARK_GRAY} />
                        </Animated.View>
                    </View>
                </TouchableOpacity>
                <Animated.FlatList
                    ref={ref => { this.FlatList = ref }}
                    data={data}
                    keyExtractor={(item, index) => !_.isEmpty(item) && item.id}
                    showsVerticalScrollIndicator={false}
                    style={[styles.overlay, { height: animateY }]}
                    renderItem={({ item, index }) => <TouchableOpacity key={!_.isEmpty(item) && item.id} style={{ padding: 16 }} onPress={() => this._onPressChild(!_.isEmpty(item) && item.name)}><Text style={styles.text}>{!_.isEmpty(item) && item.name}</Text></TouchableOpacity>}
                />
            </View>
        )
    }
}

export default Dropdown;

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: '#E5E5E5',
        height: Constants.BUTTON_HEIGHT,
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
        maxHeight: 450,
        position: 'absolute',
        top: Constants.BUTTON_HEIGHT + 12,
        left: 0,
        right: 0,
        backgroundColor: Constants.COLOR_WHITE,
        shadowColor: Constants.COLOR_BLACK,
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        elevation: 1
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    }
})
