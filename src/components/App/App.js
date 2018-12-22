import React, { Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './App.css';
import Game from '../Game/Game';

const styles = {
  grow: {
    flexGrow: 1
  },
  label: {
    color: 'inherit'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      regularMode: true
    };
  }

  onModeChange() {
    const regularMode = !this.state.regularMode;
    this.setState({
      regularMode: regularMode
    });
  }

  render() {
    const { regularMode } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <header>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="title" color="inherit" className={classes.grow}>
                Tic Tac Toe
              </Typography>
              <FormControlLabel
                      classes={{label: classes.label}}
                      control={
                          <Switch
                              value="!regularMode"
                              color="secondary"
                              onChange={() => this.onModeChange()}
                              checked={!regularMode}>
                          </Switch>
                      }
                      label="Devlandia"
              ></FormControlLabel>
            </Toolbar>
          </AppBar>
        </header>
        <section>
          <Game regularMode={regularMode} />
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(App);
