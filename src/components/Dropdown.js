import React from 'react'
import { View, Picker, StyleSheet } from 'react-native';
import { Constants } from '../configs';

var _ = require('lodash');

const Dropdown = ({
    meta,
    input,
    data,
    onChangeValue,
    value,
    name,
    style
}) => (
        <View>
            <View style={styles.inputBox}>
                <Picker
                    selectedValue={value ? value.name : ""}
                    onValueChange={onChangeValue ? (val) => onChangeValue(val, name) : null}
                    mode="dropdown"
                    style={[styles.dropdown, style]}
                    itemStyle={{backgroundColor: 'tomato'}}
                >
                    {data.map((value, index) => (
                        <Picker.Item
                            key={index}
                            value={value}
                            label={value}
                        />
                    ))}
                </Picker>
            </View>
            {/* {meta.error &&
                meta.touched &&
                <Label error text={meta.error} />
            } 
         meta.error && meta.touched && { borderColor: colors.error }]*/}
        </View>
    )

export default Dropdown;

const styles = StyleSheet.create({
    inputBox: {
        backgroundColor: Constants.COLOR_WHITE,
        height: 45,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#eee',
        borderBottomWidth: 0,
        borderBottomColor: Constants.COLOR_DARK_GRAY,
        shadowColor: Constants.COLOR_BLACK,
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0,
        },
        elevation: 1,
        padding: 5,
        marginVertical: 12
    },
    dropdown: {
        flex: 1,
        height: 45,
        borderWidth: 2,
        borderColor: Constants.COLOR_DARK_GRAY
    }
})
