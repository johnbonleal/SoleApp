import React, { PureComponent } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';
import { Constants } from '../../configs';
import { Dropdown } from '../../components';

var _ = require('lodash');

const PersonalReferenceField = ({ data, title, value, onChangeValue, style }) => (
    <View style={[{ marginVertical: 8 }, style]}>
        <Text style={[styles.title, { marginBottom: 8 }]}>{title}</Text>
        {
            data.length > 0 &&
            data.map((item, index) => {
                let name = _.camelCase(item);
                return (
                    <View
                        key={index}
                        style={[
                            styles.container,
                            index === 0 && styles.top,
                            index === data.length - 1 && styles.bottom,
                            (index === 0 && data.length === 1) && { borderTopWidth: 1 }
                        ]}
                    >
                        {
                            index === data.length - 1 ?
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={[styles.labelStyle, { flex: 1 }]}>{item}</Text>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <Dropdown
                                            title={"Gender"}
                                            onChangeValue={onChangeValuePersonal}
                                            data={GenderData}
                                            name={"gender"}
                                            value={personal}
                                            style={{ width: '70%' }}
                                        />
                                        <Text style={{ fontWeight: 'bold', color: 'red' }}>*</Text>
                                    </View>
                                </View> :
                                <View style={{ flex: 1, flexDirection: 'row' }}>
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
                                    <TextInput
                                        style={{ width: '100%', fontWeight: 'bold', color: Constants.COLOR_DARK_GRAY }}
                                        onChangeText={onChangeValue ? (text) => onChangeValue(text, name) : null}
                                        value={value ? value[name] : ""}
                                        onFocus={() => this.setState({ currentIndex: index })}
                                        onBlur={() => this.setState({ currentIndex: null })}
                                    />
                                    {value && !value[name] && <Text style={{ fontWeight: 'bold', color: 'red', textAlignVertical: 'center' }}>*</Text>}
                                </View>
                        }
                    </View>
                )
            })
        }
    </View>
)
class PersonalReference extends PureComponent {
    render() {
        const {
            onChangeValue,
            value
        } = this.props;
        return (
            <View>
                {/* <PersonalReferenceField
                    data={["Full Name", "Mobile Number"]}
                    title={"Reference 1"}
                    {...this.props}
                /> */}
            </View>
        )
    }
}

export default PersonalReference;

const styles = StyleSheet.create({
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
        paddingHorizontal: 16,
        color: Constants.COLOR_DARK_GRAY,
        fontWeight: 'bold',
        alignItems: 'center',
        fontSize: 15
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: Constants.COLOR_DARK_GRAY
    }
});