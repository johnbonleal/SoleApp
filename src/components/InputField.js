import React from 'react';
import { TextInput, View, Text } from 'react-native';

const InputField = ({
    name,
    title,                       // field name                   : string
    autoCorrect,                // text field auto-correct      : boolean
    underlineColorAndroid,      // underline color for Android  : string
    customStyle,                      // modified style               : object
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
    style
}) => (
        <View style={[{ marginVertical: 3 }, style]}>
            <Text style={titleStyle}>{title}</Text>
            <TextInput
                svalue={value && value}
                secureTextEntry={secureTextEntry}
                defaultValue={defaultValue && defaultValue}
                onChangeText={onChangeText ? (val) => onChangeText(val, name) : null}
                onEndEditing={onEndEditing ? (val) => onEndEditing(val, name) : null}

                keyboardType={keyboardType}
                autoCorrect={autoCorrect}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : "#30685D"}
                autoCapitalize={autoCapitalize}
                disabled={disabled}

                style={customStyle}
                underlineColorAndroid={underlineColorAndroid ? underlineColorAndroid : "transparent"}
            />
            {errors && errors.length > 0 && errors.map((item, index) =>
                item.field === name && item.error ?
                    <Text key={index} style={{ color: 'red', fontSize: 10, fontStyle: 'italic', marginLeft: 10 }}>
                        {item.error}
                    </Text>
                    : <View key={index} />
            )
            }
        </View>
    );

export default InputField;