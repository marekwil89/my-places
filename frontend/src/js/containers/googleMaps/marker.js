import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Marker extends Component {
  render() {
    const { logo, id, history } = this.props;

    return (
      <span onClick={() => history.push(`/place/${id}`)} className="marker-box">
        <figure>
          <img src={logo} />
        </figure>
      </span>
    )
  }
}

export default withRouter(Marker);
