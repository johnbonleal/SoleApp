import React, { PureComponent } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Dropdown from '../../components/Dropdown';
import { Constants } from '../../configs';
import { GenderData } from '../../utils/Data';

var _ = require('lodash');

class PersonalReferenceField extends PureComponent {
    state = {
        currentIndex: null
    }
    render() {
        const { currentIndex } = this.state;
        const { data, title, value, onChangeValue, style, personal } = this.props;
        return (
            <View style={[{ marginVertical: 8 }, style]}>
                <Text style={[styles.title, { marginBottom: 8 }]}>{title}</Text>
                {
                    data.length > 0 &&
                    data.map((item, index) => {
                        let name = _.camelCase(item);
                        return (
                            <View>
                                <View
                                    style={[
                                        styles.labelContainerStyle,
                                        (currentIndex === index || value[name]) && { left: 16, top: -12 }
                                    ]}
                                    pointerEvents={"none"}
                                >
                                    <Text
                                        style={[
                                            styles.labelStyle,
                                            (currentIndex === index || value[name]) && { fontSize: 12, fontWeight: 'normal' }
                                        ]}
                                    >
                                        {item}
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.container,
                                        index === 0 && styles.top,
                                        (index === 0 && data.length === 1) && { borderTopWidth: 1 },
                                        currentIndex === index - 1 && { borderTopWidth: 0 },
                                        currentIndex === index + 1 && { borderBottomWidth: 0 },
                                        currentIndex === index && { borderColor: Constants.COLOR_AVAILA_SECONDARY, borderTopWidth: 1, borderBottomWidth: 1 }
                                    ]}
                                >
                                    <TextInput
                                        style={{ width: '100%', fontWeight: 'bold', color: Constants.COLOR_DARK_GRAY }}
                                        onChangeText={onChangeValue ? (text) => onChangeValue(text, name) : null}
                                        value={value ? value.name : ""}
                                        onFocus={() => this.setState({ currentIndex: index })}
                                        onBlur={() => this.setState({ currentIndex: null })}
                                    />
                                    {value && !value[name] && <Text style={{ fontWeight: 'bold', color: 'red', textAlignVertical: 'center' }}>*</Text>}
                                </View>
                            </View>
                        )
                    })
                }
                <View style={[styles.container, styles.bottom]}>
                    <View style={{ width: '100%', flexDirection: 'row' }}>
                        <Text style={[styles.labelStyle, { flex: 1, textAlignVertical: 'center' }]}>Relationship</Text>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: '75%', width: '100%', marginRight: 5 }}>
                                <Dropdown
                                    onChangeValue={onChangeValue}
                                    data={GenderData}
                                    name={"gender"}
                                    value={personal}
                                />
                            </View>
                        </View>
                    </View>
                    <Text style={{ fontWeight: 'bold', color: 'red', textAlignVertical: 'center' }}>*</Text>
                </View>
            </View>
        )
    }
}

export default PersonalReferenceField;

const styles = StyleSheet.create({
    labelContainerStyle: {
        backgroundColor: Constants.COLOR_WHITE,
        position: 'absolute',
        left: 16,
        top: 56 / 4,
        paddingVertical: 3,
        paddingHorizontal: 5,
        zIndex: 99
    },
    labelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_LIGHT_GRAY
    },
    top: {
        borderTopWidth: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    bottom: {
        borderTopWidth: 0,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12
    },
    container: {
        height: Constants.BUTTON_HEIGHT,
        flexDirection: 'row',
        borderColor: '#D8D8D8',
        borderTopWidth: 0,
        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        color: Constants.COLOR_DARK_GRAY,
        fontWeight: 'bold',
        fontSize: 15
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    }
});