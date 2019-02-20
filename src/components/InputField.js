import React from 'react';
import { TextInput, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Constants } from '../configs';

const InputField = ({
    icon,
    name,
    title,                       // field name                   : string
    autoCorrect,                // text field auto-correct      : boolean
    underlineColorAndroid,      // underline color for Android  : string
    onChangeText,               // function on text change      : function
    onEndEditing,               // function on end editing      : function
    value,                      // text field value             : string
    placeholder,                // placeholder text             : string
    placeholderTextColor,       // placeholder text color       : string
    keyboardType,               // keyboard popup type          : string
    autoCapitalize,             // auto capitalize option       : string
    widthDivider,               // width divider value          : integer
    right,                      // right align                  : boolean
    center,                     // center align                 : boolean
    disabled,
    defaultValue,
    secureTextEntry,
    errors,
    titleStyle,
    iconStyle,
    inputStyle,
    imageStyle,
    containerStyle,
    textInputStyle,
    input,
    meta
}) => (
        <View style={containerStyle}>
            <View style={textInputStyle}>
                {
                    icon && <View style={iconStyle}>
                        <Image style={imageStyle} source={icon} resizeMode={'contain'} />
                    </View>
                }
                <TextInput
                    value={input.value}
                    secureTextEntry={secureTextEntry}
                    defaultValue={defaultValue && defaultValue}
                    onChangeText={input.onChange}
                    // onEndEditing={onEndEditing ? (val) => onEndEditing(val, name) : null}

                    keyboardType={keyboardType}
                    autoCorrect={autoCorrect}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor ? placeholderTextColor : Constants.COLOR_WHITE}
                    autoCapitalize={autoCapitalize}
                    disabled={disabled}

                    style={inputStyle}
                    underlineColorAndroid={underlineColorAndroid ? underlineColorAndroid : "transparent"}
                />
            </View>
            {
                meta && meta.touched &&
                <Text style={{ color: Constants.COLOR_WHITE, fontSize: 10, fontStyle: 'italic', marginLeft: 10 }}>
                    {meta.error}
                </Text>
            }
        </View>
    );

InputField.propTypes = {
    containerStyle: PropTypes.object,
    iconStyle: PropTypes.object,
    inputStyle: PropTypes.object,
    imageStyle: PropTypes.object
};

InputField.defaultProps = {
    containerStyle: {},
    iconStyle: {},
    inputStyle: {},
    imageStyle: { flex: 1, height: null, width: null }
}

export default InputField;
