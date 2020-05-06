import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
  render() {
    return (
      <React.Fragment>
        <span>&copy; {new Date().getFullYear()} made with {" "}
          <i className="fa fa-heart" /> by CaoNV-QE for a better web.
        </span>
        <span className="ml-auto">QE-A02 HonHai Dinh Tram BG</span>
      </React.Fragment>
    );
  }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
