import React, { Component } from 'react';
import GhapiService from '../../../services/api-service';
import { connect } from 'react-redux';
import { compose } from "redux";
import {  accountReg, accountRegError  } from '../../../actions/index'

const hocReg = (View) => {
    return class extends Component {
        ghapiService = new GhapiService();
        state = {
            login: '',
            email: '',
            password: '',
            repeatPassword: '',
            showPassword: false,
        };
        handleChange = prop => event => {
            this.setState({ [prop]: event.target.value });
        };
        
        handleClickShowPassword = () => {
            this.setState(state => ({ showPassword: !state.showPassword }));
        };
        validate = ({ login, email, password, repeatPassword }) => {
            if (login.trim() === '' || password.trim() === '' || repeatPassword.trim() === '' || email.trim() === '') {
                this.props.accountRegError('Поля должны содержать данные!');
                return false;
            }
            else if (password.trim() !== repeatPassword.trim() && (login.trim() !== '' || password.trim() !== '' || repeatPassword.trim() !== '' || email.trim() !== '') ) {
                this.props.accountRegError('Пароли не совпадают.');
                return false;
            }
            else {
                return true;
            }
        }
        reg = async ({ login, email, password }) => {
            let formData = new FormData();
            formData.append('email', email);
            formData.append('name', login);
            formData.append('password', password);
            const response = await this.ghapiService.regUser(formData);
            if (response.data.auth_token !== undefined) {
                this.props.accountReg();
                localStorage.setItem('auth_token', response.data.auth_token);
                console.log(response);
            }
            else {
                this.props.accountRegError('Невозможно зарегистрировать аккаунт.');
            }
        }
        submitForm = (e) => {
            e.preventDefault();
            const { login, email, password, repeatPassword } = this.state;
            if (this.validate({ login, email, password, repeatPassword })) {
                this.reg({ login, email, password });
            }
        }
        render() {
            const { reg_error } = this.props;
            const { login, password, repeatPassword, showPassword, email } = this.state;
            return (
                <View
                    reg_error={reg_error}
                    login={login}
                    password={password}
                    repeatPassword={repeatPassword}
                    showPassword={showPassword}
                    email={email}
                    submitForm={this.submitForm}
                    handleChange={this.handleChange}
                    handleClickShowPassword={this.handleClickShowPassword}
                />
            )
        }
    }
} 
const mapStateToProps = ({ reg_error }) => {
    return { reg_error };
}  
const mapDispatchToProps = {
    accountReg,
    accountRegError
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    hocReg
);