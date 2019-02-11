import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { RoundedFields } from '../../components/Loan';
import { Constants } from '../../configs';

const DocumentaryField = ({ data, title, style }) => (
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
                        <TouchableOpacity style={{ width: '70%', paddingVertical: 8, backgroundColor: '#E5E5E5', justifyContent: 'center', alignItems: 'center', borderRadius: 3, marginRight: 5 }}>
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
    render() {
        const {
            onGetData,
            documents
        } = this.props;
        return (
            <View>
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
            </View>
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