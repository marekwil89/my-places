import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';
import { AppBar, Toolbar, Button } from '@material-ui/core';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    const { loged } = this.props;
    loged();
  }

  onLogout() {
    const { logout } = this.props;
    logout();
  }

  render() {
    const { logedUser, history } = this.props;

    return (
      <AppBar color="primary" className="navigation" position="static">
        <Toolbar>
          <h4>
            {logedUser && logedUser.login}
          </h4>
          <Button onClick={() => history.push(`/login`)} color="inherit">login</Button>
          <Button onClick={() => history.push(`/register`)} color="inherit">register</Button>
          <Button onClick={() => history.push(`/places`)} color="inherit">places</Button>
          <Button onClick={() => history.push(`/create`)} color="inherit">create</Button>
          <Button onClick={this.onLogout} color="inherit">logout</Button>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapStateToProps = (state) => {
  const { logedUser } = state.auth;

  return {
    logedUser,
  };
};

const mapDispatchToProps = dispatch => ({
  loged: () => dispatch(authActions.loged()),
  logout: () => dispatch(authActions.logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));
