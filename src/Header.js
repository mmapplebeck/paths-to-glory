import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Help from '@material-ui/icons/Help';
import Dialog from '@material-ui/core/Dialog';

import helpImage from './images/help.png'
import Search from './Search'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  helpImage: {
    maxWidth: '100%',
  },
  paper: {
    padding: theme.spacing(2),
  },
  disclaimer: {
    marginTop: theme.spacing(2),
  }
}));

export default function Header({setNodeName}) {
  const [isHelpModalOpen, setIsHelpModalOpen] = React.useState(false)
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            OncoEMR User Paths
          </Typography>
          <Search setNodeName={setNodeName} />
          <div className={classes.grow} />
            <IconButton
              aria-label="What is this?"
              aria-haspopup="true"
              onClick={() => setIsHelpModalOpen(true)}
              color="inherit"
            >
              <Help />
            </IconButton>
        </Toolbar>
      </AppBar>
      <Dialog
        open={isHelpModalOpen}
        onClose={() => setIsHelpModalOpen(false)}
        aria-labelledby="What is this?"
        aria-describedby="Learn how to use the app."
      >
        <img src={helpImage} alt="Chart" className={classes.helpImage} />
        <div className={classes.paper}>
          <Typography variant="h6" gutterBottom>
            How to Use and Interpret
          </Typography>
          <Typography variant="body1" gutterBottom>
            This chart shows the flow of users through OncoEMR. Each node represents a page or a modal within OncoEMR. The lines represent users’ movement from one page/modal to another. The thickness of the lines indicate how frequent that movement occurs; the thicker the line the more frequent the movement.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Clicking on a node will show you the flow of users from it.
          </Typography>
          <Typography variant="body1" gutterBottom>
            You can use the search function to locate and display nodes of interest.
          </Typography>
          <div className={classes.disclaimer}>
            <Typography variant="h6" gutterBottom>
              Disclaimer
            </Typography>
            <Typography variant="body1" gutterBottom>
              This application is a proof-of-concept. The data shown does not represent all users’ activity in OncoEMR.
            </Typography>
          </div>
        </div>
      </Dialog>
    </>
  );
}