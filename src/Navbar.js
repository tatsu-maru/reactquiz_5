import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
//import QuizList from './QuizList';
//import Home from './Home'
import ListItemText from '@material-ui/core/ListItemText';
//import { BrowserRouter as Router, Route} from 'react-router-dom';

//import QuizList from './Hakone＿Quiz/QuizList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <h1>陸上長距離&アニメのクイズサイト</h1>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
      <Link to="/">
          {['ホーム', ].map((text) => (
            <ListItem button key={text}>
             
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </Link>
        </List>
        <Divider />
        <List>
        
        <Link to="/HakoneQuizList">
          {['箱根駅伝クイズ一覧'].map((text) => (
         
            <ListItem link button key={text} >
           
              <ListItemText primary={text} />
             
            </ListItem>
            
          ))}
   
              
   </Link>
        </List>
        <List>
        <Link to="/ShingekiQuizList">
          {['進撃の巨人クイズ一覧'].map((text) => (
          
            <ListItem link button key={text} >
           
              <ListItemText primary={text} />
            </ListItem>
          ))}
      </Link>
        </List>
        <Divider />
        <Link to="/HakoneQuizFrom1">
          {['選手の出身大学1'].map((text) => (
         
            <ListItem link button key={text} >
           
              <ListItemText primary={text} />
             
            </ListItem>
            
          ))}
         </Link>
         <Link to="/ShingekiQuiz1">
          {['進撃の巨人1'].map((text) => (
         
            <ListItem link button key={text} >
           
              <ListItemText primary={text} />
             
            </ListItem>
            
          ))}
           </Link>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
        
         
        </Typography>
        <Typography paragraph>
 
        </Typography>
      </main>
        
     
    </div>
  );
}


