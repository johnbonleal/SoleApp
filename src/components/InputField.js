import React from 'react';
import { TextInput, View, Dimensions, Text } from 'react-native';

const { width } = Dimensions.get('window');

const InputField = props => {
    const {
        name,                       // field name                   : string
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
        errors
    } = props;

    return (
        <View
            style={[
                {
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: right ? 'flex-end' : center ? 'center' : 'flex-start',
                    paddingHorizontal: 5
                },
                widthDivider ? { width: width / widthDivider } : { width: '100%' }
            ]}
        >
            <TextInput
                value={value && value}
                defaultValue={defaultValue && defaultValue}
                onChangeText={onChangeText ? (val) => onChangeText(val, name) : null}
                onEndEditing={onEndEditing ? (val) => onEndEditing(val, name) : null}

                keyboardType={keyboardType ? keyboardType : "default"}
                autoCorrect={autoCorrect ? autoCorrect : false}
                placeholder={placeholder ? placeholder : "Enter text here..."}
                placeholderTextColor={placeholderTextColor ? placeholderTextColor : "#30685D"}
                autoCapitalize={autoCapitalize ? autoCapitalize : "none"}
                disabled={disabled}

                style={customStyle ? customStyle : {}}
                underlineColorAndroid={underlineColorAndroid ? underlineColorAndroid : "transparent"}
            />

            {errors && errors.length > 0 && errors.map((item, index) =>
                item.field === name && item.error ?
                    <Text key={index} style={{ color: 'red', fontSize: 10, fontFamily: 'Raleway-Italic', marginLeft: 10 }}>
                        {item.error}
                    </Text>
                    : <View key={index} />
            )
            }
        </View>
    );
}

export default InputField;