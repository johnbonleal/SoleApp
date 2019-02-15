import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { RoundedFields } from '.';
import { Constants } from '../../configs';

const DocumentaryField = ({
    data,
    title,
    style
}) => (
        <View style={[{ marginVertical: 8 }, style]}>
            <Text style={[styles.title, { marginBottom: 8 }]}>{title}</Text>
            {
                data.length > 0 &&
                data.map((item, index) => (
                    <View
                        key={index}
                        style={[
                            styles.container,
                            index === 0 && styles.top,
                            index === data.length - 1 && styles.bottom,
                            (index === 0 && data.length === 1) && { borderTopWidth: 1 }
                        ]}
                    >
                        <Text style={[styles.labelStyle, { flex: 1 }]}>{item}</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <TouchableOpacity style={{ width: '75%', paddingVertical: 8, backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center', borderRadius: 3, marginRight: 5 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: Constants.COLOR_DARK_GRAY }}>Upload</Text>
                            </TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', color: 'red' }}>*</Text>
                        </View>
                    </View>
                ))
            }
        </View>
    );

class DocumentaryRequirement extends PureComponent {
    state = {
        translateX: new Animated.Value(Constants.SCREEN_WIDTH * 2),
        opacity: new Animated.Value(0)
    }
    componentDidMount() {
        this._startAnimation();
    }
    componentWillUnmount() {
        this._dismissAnimation();
    }
    _startAnimation = () => {
        const { translateX, opacity } = this.state;
        Animated.parallel([
            Animated.spring(translateX, {
                toValue: 0,
                friction: 5,
                tension: 5
            }),
            Animated.timing(opacity, {
                toValue: 1
            })
        ]).start();
    }
    _dismissAnimation = () => {
        const { translateX, opacity } = this.state;
        Animated.parallel([
            Animated.spring(translateX, {
                toValue: -100
            }),
            Animated.timing(opacity, {
                toValue: 0
            })
        ]).start();
    }
    render() {
        const { translateX, opacity } = this.state;
        const {
            onGetData,
            documents
        } = this.props;
        return (
            <Animated.View style={{ transform: [{ translateX }], opacity }}>
                <DocumentaryField
                    data={["Front", "Back"]}
                    title={"Government ID"}
                />
                <DocumentaryField
                    data={["Document"]}
                    title={"Proof of Billing"}
                />
                <DocumentaryField
                    data={["Document"]}
                    title={"Payslip"}
                />
                <DocumentaryField
                    data={["Document", "Document"]}
                    title={"Other Documents"}
                />
            </Animated.View>
        );
    }
}

export default DocumentaryRequirement;

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