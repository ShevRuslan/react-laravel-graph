import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SimpleModal from '../modal';
import AutorizationForm from './auth';
import RegistrationForm from './reg'
import styles from './style';
class Header extends Component {

  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    burgerAnchorEL: null,
    modalAuthOpen: false,
    modalRegOpen: false,
    
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  handleBurgerMenuOpen = event => {
    this.setState({burgerAnchorEL: event.currentTarget })
  }
  handleBurgerMenuClose = () => {
    this.setState({burgerAnchorEL: null })
  }
  handleAuthModalOpen = () => {
    this.setState({ modalAuthOpen: true });
  }
  handleAuthModalClose = () => {
    this.setState({ modalAuthOpen: false });
  }
  handleRegModalOpen = () => {
    this.setState({ modalRegOpen: true });
  }
  handleRegModalClose = () => {
    this.setState({ modalRegOpen: false });
  }
  logout = () => {
    localStorage.removeItem('auth_token');
    this.setState((state) => {
      return {
        logout: true
      }
    });
  }
  render() {
    const { anchorEl, mobileMoreAnchorEl, burgerAnchorEL, modalAuthOpen, modalRegOpen } = this.state;
    const { classes } = this.props;
    const isBurgerMenuOpen = Boolean(burgerAnchorEL);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const renderBurgerMenu = (
      <Menu
        anchorEl={burgerAnchorEL}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isBurgerMenuOpen}
        onClose={this.handleBurgerMenuClose}
      >
        <MenuItem onClick={this.handleBurgerMenuClose}>О сайте</MenuItem>
        <MenuItem onClick={this.handleBurgerMenuClose}>Настройки</MenuItem>
        <MenuItem onClick={() => { this.handleAuthModalOpen(); this.handleBurgerMenuClose();}}>Авторизироваться</MenuItem>
        <MenuItem onClick={() => { this.handleRegModalOpen(); this.handleBurgerMenuClose();}}>Зарегистрироваться</MenuItem>
      </Menu>
    );

    const renderProfileMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Профиль</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Мой аккаунт</MenuItem>
        <MenuItem onClick={() => { this.handleMenuClose; this.logout();}}>Выйти</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Сообщения</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Оповещания</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Профиль</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" onClick={this.handleBurgerMenuOpen} aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
              Графики
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Поиск..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton className={classes.icon} color="inherit">
                <Badge badgeContent={1} color="secondary">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton className={classes.icon} color="inherit">
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                className={classes.icon}
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton className={classes.icon} aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>

        <SimpleModal
          isOpen={modalAuthOpen}
          onClose={this.handleAuthModalClose}
        > 
          <AutorizationForm></AutorizationForm>
        </SimpleModal>
        
        <SimpleModal
          isOpen={modalRegOpen}
          onClose={this.handleRegModalClose}
        > 
          <RegistrationForm></RegistrationForm>
        </SimpleModal>        
        {renderProfileMenu}
        {renderMobileMenu}
        {renderBurgerMenu}
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
