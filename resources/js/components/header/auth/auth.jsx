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
import GhapiService from '../../../services/api-service';
import {  connect  } from 'react-redux';
import {  accountAuth, accountAuthError  } from '../../../actions/index'
class AutorizationForm extends Component {
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
    submit = async (e) => {
        e.preventDefault();
        const { login, password, repeatPassword } = this.state;
        if (this.validate({ login, password, repeatPassword })) {
            let formData = new FormData();
            formData.append('email', login);
            formData.append('password', password);

            const response = await this.ghapiService.authUser(formData);
            if (response.data.auth_token !== undefined) {
                this.props.accountAuth(response.data.auth_token)
                localStorage.setItem('auth_token', response.data.auth_token);
                
            } else {
                this.props.accountAuthError('Аккаунт не найден. Проверьте введённые данные.');
            }
        }
    }
    render() {
        const { classes, auth_error, isAuth } = this.props;
        const { login, password, repeatPassword, showPassword} = this.state; 
        return (
            <form onSubmit={this.submit}>
                <Typography align="center" variant="h6" color="inherit" noWrap>Авторизация</Typography>
            
                <TextField
                id="outlined-adornment-login"
                className={classNames(classes.margin, classes.textField)}
                variant="outlined"
                label="Почта или логин"
                value={login}
                onChange={this.handleChange('login')}
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
                    Авторизироваться
                </Button>
                <div style={{color: 'red', textAlign: 'center', width: '100%',fontFamily: "Roboto"}}>{ auth_error }</div>
            </form>
        );
    }
}

AutorizationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapStateToProps  = ({isAuth, auth_error}) => {
    return { isAuth, auth_error };
}
const mapDispatchToProps  = {
    accountAuth,
    accountAuthError
}  
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AutorizationForm));