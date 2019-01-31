import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { Form, Field } from 'react-native-validate-form';
import { InputField } from '../../components';
import { Constants } from '../../configs';
import { fonts } from '../../resources';
import { required } from '../../utils/Validations';

const ChangePinForm = ({ 
    onChangePassword,
    submit,
    errors,
    password,
    parent
}) => (
    <View style={{ flex: 1, width: '100%', paddingHorizontal: 16 }}>
        <Form
            ref={(ref) => parent.ChangePinForm = ref}
            style={styles.inputFieldContainer}
            validate
            submit={submit}
            errors={errors}
        >
            <Field
                required
                validations={required}
                component={InputField}
                name="new_password"
                title="Enter new password"
                onChangeText={onChangePassword}
                customStyle={styles.inputField}
                titleStyle={styles.titleStyle}
                value={password && password.newPassword}
            />
            <Field
                required
                validations={required}
                component={InputField}
                name="confirm_password"
                title="Confirm your password"
                onChangeText={onChangePassword}
                customStyle={styles.inputField}
                titleStyle={styles.titleStyle}
                value={password && password.confirmPassword}
            />
        </Form>
    </View>
);

export default ChangePinForm;

const styles = StyleSheet.create({
    inputFieldContainer: {
        flex: 1
    },
    inputField: {
        color: '#4A4A4A', 
        fontSize: fonts.SMALL, 
        borderWidth: 1, 
        borderColor: '#DBDBDB', 
        borderRadius: 8, 
        marginVertical: 3, 
        paddingHorizontal: 12, 
        paddingVertical: 5
    },
    titleStyle: {
        fontSize: 15, 
        color: '#9B9B9B', 
        marginVertical: 3 
    }
});