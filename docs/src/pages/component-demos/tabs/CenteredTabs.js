// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
  },
});

class CenteredTabs extends Component {
  state = {
    index: 0,
  };

  handleChange = (event, index) => {
    this.setState({ index });
  };

  render() {
    const classes = this.props.classes;

    return (
      <Paper className={classes.root}>
        <Tabs
          index={this.state.index}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredTabs);
