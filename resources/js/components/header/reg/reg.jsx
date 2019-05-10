import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import styles from './style';
import {  connect  } from 'react-redux';
import {  accountReg, accountRegError  } from '../../../actions/index'
import GhapiService from '../../../services/api-service';
class RegistrationForm extends Component {
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
        const { classes, reg_error } = this.props;
        const { login, password, repeatPassword, showPassword, email } = this.state;
        return (
            <form onSubmit={this.submitForm}>
                <Typography align="center" variant="h6" color="inherit" noWrap>Регистрация</Typography>
            
                <TextField
                id="outlined-adornment-login"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Логин"
                value={login}
                onChange={this.handleChange('login')}
                />
                <TextField
                id="outlined-adornment-email"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Почта"
                value={email}
                onChange={this.handleChange('email')}
                />
                <TextField
                id="outlined-adornment-password"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                label="Пароль"
                value={password}
                onChange={this.handleChange('password')}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="Toggle password visibility"
                        onClick={this.handleClickShowPassword}
                        >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
                <TextField
                id="outlined-adornment-repeat-password"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                type={showPassword ? 'text' : 'password'}
                label="Повторите пароль"
                value={repeatPassword}
                onChange={this.handleChange('repeatPassword')}
                />
                <Button type="submit" variant="outlined" color="primary" className={classNames(classes.button, classes.textField)}>
                    Зарегистрироваться
                </Button>
                <div style={{color: 'red', textAlign: 'center', width: '100%',fontFamily: "Roboto"}}>{ reg_error }</div>
            </form>
        );
    }
}

RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps = ({ reg_error }) => {
    return { reg_error };
}  
const mapDispatchToProps = {
    accountReg,
    accountRegError
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(RegistrationForm));