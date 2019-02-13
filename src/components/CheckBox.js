import React, { PureComponent } from 'react';
import { TouchableNativeFeedback, View, StyleSheet, Image } from 'react-native';
import { Constants } from '../configs';
import { images } from '../resources';

class CheckBox extends PureComponent {
    state = {
        isChecked: false
    }
    _handleOnPress = () => {
        const { isChecked } = this.state;
        const { name, handleChangeValue } = this.props;
        this.setState(
            { isChecked: !isChecked },
            handleChangeValue(!isChecked, name)
        );
    }
    render() {
        const {
            containerStyle,
            imageStyle
        } = this.props;
        const { isChecked } = this.state;
        return (
            <TouchableNativeFeedback onPress={this._handleOnPress}>
                <View style={[styles.container, containerStyle]}>
                    {isChecked && <View style={styles.checkIcon}>
                        <Image style={styles.image} resizeMode={"contain"} source={images.checkbox} />
                    </View>}
                </View>
            </TouchableNativeFeedback>
        )
    }
}

export default CheckBox;

const styles = StyleSheet.create({
    container: {
        height: 24,
        width: 24,
        borderWidth: 1,
        backgroundColor: Constants.COLOR_WHITE,
        borderColor: Constants.COLOR_SUPER_LIGHT_GRAY,
        borderRadius: 5
    },
    checkIcon: {
        height: 24,
        width: 24,
        position: 'absolute',
        bottom: 0,
        left: 5
    },
    image: {
        flex: 1,
        height: null,
        width: null
    }
})