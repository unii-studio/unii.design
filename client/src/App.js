import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import Main from './components/main';
import AppHeader from './blocks/AppHeader';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function App() {
  const classes = useStyles();
  
  return (
    <Container className={classes.root}>
      <AppHeader position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <AppHeader.Link to="/">WJ DEV</AppHeader.Link>
          </Typography>
          <Box display={{ xs: 'none', sm: 'flex', md: 'flex', xl: 'flex'}} >
            <Button color="inherit">
              <AppHeader.Link to="/projects">PROJECTS</AppHeader.Link>
            </Button>
            <Button color="inherit">
              <AppHeader.Link to="/resume">RESUME</AppHeader.Link>
            </Button>
            <Button color="inherit">
              <AppHeader.Link to="/contact">CONTACT</AppHeader.Link>
            </Button>
          </Box>

        </Toolbar>
      </AppHeader>
      <Toolbar/>
      <Container>
        <Paper className="page-content"/>
        <Main />
      </Container>
    </Container>
  );
}
