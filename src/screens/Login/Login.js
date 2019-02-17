import React, { Component } from 'react';
import { View, Image, StyleSheet, StatusBar } from 'react-native';
import { Form, Field } from 'react-native-validate-form';
import { InputField, ErrorBox, Loading } from '../../components';
import { Button, Footer, FormField } from '../../components/Login';
import { connect } from 'react-redux';
import { requestLogin } from '../../actions/LoginActions';
import { NavigationService, Constants } from '../../configs';
import { required } from '../../utils/Validations';
import { LoginImageData } from '../../utils/Data';
import { images } from '../../resources';
import Carousel from '../../utils/Carousel';
import styles from '../../styles/LoginStyle';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: {}
        };
    }
    _handleChangeValue = (section, data, field) => {
        return this.setState({ [section]: { ...this.state[section], [field]: data } });
    }
    _handleLogin = () => {
        this.props.requestLogin({
            ...this.state.login,
            platform: 'Venteny',
            source: 'mobile'
        });
    }
    render() {
        const { login } = this.state;
        const { auth } = this.props;
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
                    <Form
                        ref={(ref) => this.LoginForm = ref}
                        style={{ width: '100%' }}
                        validate
                    // submit={submit}
                    // errors={errors}
                    >
                        <Field
                            required
                            validations={required}
                            component={InputField}
                            name="unique_key"
                            placeholder="Membership ID Number"
                            icon={images.login_username}
                            containerStyle={styles.loginTextFieldContainer}
                            iconStyle={styles.loginTextFieldIcon}
                            inputStyle={styles.loginTextField}
                            onChangeText={this._handleChangeValue.bind(this, 'login')}
                            value={login && login.membership_id}
                        />
                        <Field
                            required
                            validations={required}
                            component={InputField}
                            name="password"
                            placeholder="Password"
                            icon={images.login_password}
                            containerStyle={styles.loginTextFieldContainer}
                            iconStyle={styles.loginTextFieldIcon}
                            inputStyle={styles.loginTextField}
                            onChangeText={this._handleChangeValue.bind(this, 'login')}
                            value={login && login.password}
                            secureTextEntry
                        />
                        <Button
                            style={styles.loginButton}
                            text={"Log In"}
                            onPress={this._handleLogin}
                        />
                    </Form>
                </View>
                <Footer />
                {
                    auth && auth.hasError &&
                    <ErrorBox text={auth.errorMessage} />
                }
                {
                    auth.isLoading &&
                    <Loading />
                }
            </View >
        )
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);