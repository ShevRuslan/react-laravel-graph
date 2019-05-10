import { compose } from "redux";

import React, { Component } from 'react';
import GhapiService from '../../../services/api-service';
import {  connect  } from 'react-redux';
import { accountAuth, accountAuthError } from '../../../actions/index';

const hocAuth = (View) => {
    return class extends Component {
        ghapiService = new GhapiService();
        state = {
            login: '',
            password: '',
            repeatPassword: '',
            showPassword: false,
        };
        handleChange = prop => event => {
            this.setState({ [prop]: event.target.value });
        };
        componentDidMount= () => {
            console.log(this.props);
        }
        handleClickShowPassword = () => {
            this.setState(state => ({ showPassword: !state.showPassword }));
        };
        validate = ({ login, password, repeatPassword }) => {
            if (login.trim() === '' || password.trim() === '' || repeatPassword.trim() === '') {
                this.props.accountAuthError('Поля должны содержать данные!');
                return false;
            }
            else if (password.trim() !== repeatPassword.trim() && (login.trim() !== '' || password.trim() !== '' || repeatPassword.trim() !== '') ) {
                this.props.accountAuthError('Пароли не совпадают.');
                return false;
            }
            else {
                return true;
            }
        }
        auth = async ({ login, password }) => {
            let formData = new FormData();
            formData.append('email', login);
            formData.append('password', password);
    
            const response = await this.ghapiService.authUser(formData);
            if (response.data.auth_token !== undefined) {
                this.props.accountAuth();
                localStorage.setItem('auth_token', response.data.auth_token);
                
            } else {
                this.props.accountAuthError('Аккаунт не найден. Проверьте введённые данные.');
            }
        }
        submit = (e) => {
            e.preventDefault();
            const { login, password, repeatPassword } = this.state;
            if (this.validate({ login, password, repeatPassword })) {
                this.auth({ login, password, repeatPassword });
            }
        }
        render() {
            const { auth_error } = this.props;
            const { login, password, repeatPassword, showPassword } = this.state;
            return (
                <View
                    auth_error={auth_error}
                    submit={this.submit}
                    handleChange={this.handleChange}
                    handleClickShowPassword={this.handleClickShowPassword}
                    login={login}
                    password={password}
                    repeatPassword={repeatPassword}
                    showPassword={showPassword}
                />
            )
        }
    }
} 
const mapStateToProps  = ({auth_error}) => {
    return { auth_error };
}
const mapDispatchToProps  = {
    accountAuth,
    accountAuthError
} 
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    hocAuth
);