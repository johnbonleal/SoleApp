import React, { PureComponent } from 'react';
import { View, Text, TextInput } from 'react-native';

class FloatingLabelInput extends PureComponent {
    state = {
        isFocused: false,
    };

    handleFocus = () => this.setState({ isFocused: true });
    handleBlur = () => this.setState({ isFocused: false });

    render() {
        const { label, inputStyle, ...props } = this.props;
        const { isFocused } = this.state;
        const labelStyle = {
            position: 'absolute',
            backgroundColor: 'white',
            top: 0,
            left: !isFocused ? 16 : 13,
            paddingVertical: 3,
            paddingHorizontal: 5,
            top: !isFocused ? 56/4 : -12,
            fontSize: !isFocused ? 15 : 13,
            color: !isFocused ? '#aaa' : '#000',
        };
        return (
            <View>
                <Text style={labelStyle}>
                    {label}
                </Text>
                <TextInput
                    {...props}
                    style={inputStyle}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    underlineColorAndroid={"transparent"}
                    blurOnSubmit
                />
            </View>
        );
    }
}

export default FloatingLabelInput;
