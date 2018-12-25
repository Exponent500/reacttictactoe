import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMode } from '../../actions';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    grow: {
      flexGrow: 1
    },
    label: {
      color: 'inherit'
    }
};

export class TopHeader extends Component {
    onModeChange() {
        const { devlandiaMode } = this.props;
        this.props.setMode(!devlandiaMode);
    }

    render() {
        const { classes, devlandiaMode } = this.props;
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.grow}>
                        Tic Tac Toe
                    </Typography>
                    <FormControlLabel
                            classes={{label: classes.label}}
                            control={
                                <Switch
                                    value="devlandiaMode"
                                    color="secondary"
                                    onChange={() => this.onModeChange()}
                                    checked={devlandiaMode}>
                                </Switch>
                            }
                            label="Devlandia"
                    ></FormControlLabel>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { devlandiaMode: state.devlandiaMode };
}

export default withStyles(styles)(connect(mapStateToProps, { setMode })(TopHeader));