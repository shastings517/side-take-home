import { Link, NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomeIcon from '@material-ui/icons/Home';

const headerData = [
  {
    label: 'Listings',
    route: '/listings',
  },
  {
    label: 'Saved',
    route: '/saved',
  },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: '#404242',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  iconButton: {
    marginRight: 'auto',
  },
  navButton: {
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 700,
    size: '18px',
    '&.active': {
      color: '#4fbdaa',
    },
  },
}));

export default function Header() {
  const {
    header,
    toolbar,
    iconButton,
    navButton
  } = useStyles();

  const homeIcon = (
    <IconButton
      {...{
        color: 'inherit',
        to: '/',
        component: Link,
        className: iconButton,
      }}
    >
    <HomeIcon data-testid="home-icon" />
    </IconButton>
  );

  const getMenuButtons = () => {
    return headerData.map(({ label, route }) => {
      return (
        <Button
          {...{
            key: label,
            color: 'inherit',
            className: navButton,
            /* use prop forwarding here: https://material-ui.com/guides/composition/#caveat-with-prop-forwarding */
            component: NavLink,
            to: route,
            activeClassName: 'active',
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <AppBar
      position='relative'
      className={header}
    >
      <Toolbar className={toolbar}>
        {homeIcon}
        {getMenuButtons()}
      </Toolbar>
    </AppBar>
  );
}
