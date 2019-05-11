import React from 'react';
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
import hocReg from './hoc-reg'
const RegistrationForm = ({classes, reg_error,  login, password, repeatPassword, showPassword, email, submitForm, handleChange, handleClickShowPassword  }) => {
    return (
        <form onSubmit={submitForm}>
            <Typography align="center" variant="h6" color="inherit" noWrap>Регистрация</Typography>
        
            <TextField
            id="outlined-adornment-login"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Логин"
            value={login}
            onChange={handleChange('login')}
            />
            <TextField
            id="outlined-adornment-email"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            label="Почта"
            value={email}
            onChange={handleChange('email')}
            />
            <TextField
            id="outlined-adornment-password"
            className={classNames(classes.margin, classes.textField)}
            variant="outlined"
            type={showPassword ? 'text' : 'password'}
            label="Пароль"
            value={password}
            onChange={handleChange('password')}
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton
                    aria-label="Toggle password visibility"
                    onClick={handleClickShowPassword}
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
            onChange={handleChange('repeatPassword')}
            />
            <Button type="submit" variant="outlined" color="primary" className={classNames(classes.button, classes.textField)}>
                Зарегистрироваться
            </Button>
            <div style={{color: 'red', textAlign: 'center', width: '100%',fontFamily: "Roboto"}}>{ reg_error }</div>
        </form>
    );
}
RegistrationForm.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default hocReg(withStyles(styles)(RegistrationForm));