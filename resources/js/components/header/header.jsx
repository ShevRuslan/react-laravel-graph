import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import Modal from '@material-ui/core/Modal';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import SimpleModal from '../modal'
const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    outline: 'none !important',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  icon: {
    outline: 'none !important',
  }
});

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
  render() {
    const { anchorEl, mobileMoreAnchorEl, burgerAnchorEL, modalAuthOpen, modalRegOpen } = this.state;
    const { classes } = this.props;
    const isBurgerMenuOpen = Boolean(burgerAnchorEL);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    console.log(modalAuthOpen);

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
        <MenuItem onClick={this.handleBurgerMenuClose}>Зарегистрироваться</MenuItem>
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
          1
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
