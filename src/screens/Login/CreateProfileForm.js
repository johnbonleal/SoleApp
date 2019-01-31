import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { Form, Field } from 'react-native-validate-form';
import { InputField } from '../../components';
import { Constants } from '../../configs';
import { fonts } from '../../resources';
import { required } from '../../utils/Validations';

const CreateProfileForm = ({
    onChangeProfile,
    submit,
    errors,
    profile,
    parent
}) => (
        <View style={{ flex: 1, width: '100%', paddingHorizontal: 16 }}>
            <Form
                ref={(ref) => parent.ChangeProfileForm = ref}
                style={styles.inputFieldContainer}
                validate
                submit={submit}
                errors={errors}
            >
                <Field
                    required
                    validations={required}
                    component={InputField}
                    name="full_name"
                    title="Full Name"
                    onChangeText={onChangeProfile}
                    customStyle={styles.inputField}
                    titleStyle={styles.titleStyle}
                    value={profile && profile.fullName}
                />
                <Field
                    required
                    validations={required}
                    component={InputField}
                    name="email"
                    title="Email"
                    onChangeText={onChangeProfile}
                    customStyle={styles.inputField}
                    titleStyle={styles.titleStyle}
                    value={profile && profile.email}
                />
                <Field
                    required
                    validations={required}
                    component={InputField}
                    name="phone_number"
                    title="Phone Number"
                    onChangeText={onChangeProfile}
                    customStyle={styles.inputField}
                    titleStyle={styles.titleStyle}
                    value={profile && profile.phoneNumber}
                />
            </Form>
        </View>
    );

export default CreateProfileForm;

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