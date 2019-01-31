import React, { PureComponent } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Constants } from '../../configs';

class FieldCreator extends PureComponent {
    state = {
        currentIndex: 0
    }
    _onFocus = index => {
        this.setState({ currentIndex: index });
    }
    render() {
        const { currentIndex } = this.state;
        const { data, style } = this.props;
        return (
            <View style={style}>
                {data.length > 0 && data.map((item, index) => (
                    <View>
                        <TextInput
                            style={[
                                styles.container,
                                index === 0 && styles.top,
                                index === data.length - 1 && styles.bottom,
                                currentIndex === index && { borderColor: Constants.COLOR_AVAILA_SECONDARY, borderTopWidth: 1, borderBottomWidth: 1 }
                            ]}
                            placeholder={item}
                            onFocus={() => this.setState({ currentIndex: index })}
                        />
                    </View>
                ))}
            </View>
        );
    }
}

export default FieldCreator;

const styles = StyleSheet.create({
    top: {
        borderBottomWidth: 0,
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
        borderColor: '#D8D8D8',
        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        fontWeight: 'bold'
    }
});