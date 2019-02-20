import React, { Component } from 'react';
import { View, Image, StyleSheet, StatusBar, Keyboard, Animated } from 'react-native';
import { Field, reduxForm, reset } from 'redux-form';
import { InputField, ErrorBox } from '../../components';
import { Button, Footer } from '../../components/Login';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions/AuthActions';
import { Constants } from '../../configs';
import { LoginImageData } from '../../utils/Data';
import { images } from '../../resources';
import Carousel from '../../utils/Carousel';
import styles from '../../styles/LoginStyle';
import { uniqueKeyValidator, passwordValidator } from '../../validations/HomeValidator';

var _ = require('lodash');

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisabled: false,
            footerOpacity: new Animated.Value(1),
            errors: []
        };
    }
    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _keyboardDidShow = () => {
        Animated.timing(this.state.footerOpacity, {
            toValue: 0
        }).start();
    }
    _keyboardDidHide = () => {
        Animated.timing(this.state.footerOpacity, {
            toValue: 1
        }).start();
    }
    _handleLogin = values => {
        this.props.requestLogin({
            ...values,
            platform: 'Venteny',
            source: 'mobile'
        });
    }
    render() {
        const { isDisabled, footerOpacity } = this.state;
        const { auth, handleSubmit } = this.props;
        return (
            <View style={styles.loginContainer}>
                <StatusBar
                    backgroundColor={'transparent'}
                    translucent
                />
                <Carousel style={{ ...StyleSheet.absoluteFill }} data={LoginImageData} imageGradient={images.login_gradient} />
                <View style={styles.loginContent}>
                    <View style={{ height: Constants.SCREEN_HEIGHT / 9, width: Constants.SCREEN_WIDTH * 0.7 }}>
                        <Image style={styles.image} source={images.venteny_logo} resizeMode={'contain'} />
                    </View>
                    <View style={{ width: '100%' }}>
                        <Field
                            component={InputField}
                            name="unique_key"
                            placeholder="Membership ID Number"
                            icon={images.login_username}
                            textInputStyle={styles.loginTextInput}
                            containerStyle={styles.loginTextFieldContainer}
                            iconStyle={styles.loginTextFieldIcon}
                            inputStyle={styles.loginTextField}
                            validate={uniqueKeyValidator}
                        />
                        <Field
                            component={InputField}
                            name="password"
                            placeholder="Password"
                            icon={images.login_password}
                            textInputStyle={styles.loginTextInput}
                            containerStyle={styles.loginTextFieldContainer}
                            iconStyle={styles.loginTextFieldIcon}
                            inputStyle={styles.loginTextField}
                            validate={passwordValidator}
                            secureTextEntry
                        />
                        <Button
                            style={styles.loginButton}
                            text={"Log In"}
                            disabled={isDisabled}
                            isLoading={auth.isLoading}
                            onPress={handleSubmit(this._handleLogin)}
                        />
                    </View>
                </View>
                <Footer style={{ opacity: footerOpacity }} />
                {
                    auth && auth.hasError &&
                    <ErrorBox text={auth.errorMessage} />
                }
            </View>
        )
    }
}

const reduxFormConfig = {
    form: 'LoginForm',
    onSubmitSuccess: (result, dispatch) => dispatch(reset('LoginForm'))
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
};

const mapDispatchToProps = dispatch => {
    return {
        requestLogin: params => dispatch(requestLogin(params))
    }
};

const LoginForm = reduxForm(reduxFormConfig)(Login);

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);