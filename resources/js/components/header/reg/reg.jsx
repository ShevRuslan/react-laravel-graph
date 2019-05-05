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

class RegistrationForm extends Component {
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
    submitForm = (e) => {
        e.preventDefault();
        fetch('/api/users')
            .then(response => { return response.json() })
            .then(users => {console.log(users)});
    }
    render() {
        const { classes } = this.props;
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
            </form>
        );
    }
}

RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(RegistrationForm);