import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignHelp extends Component {
  render() {
    const { helpText, linkText, linkTo } = this.props;
    return (
      <p className="text-help text-center">
        {helpText}
        <Link className="text-center login-here" to={linkTo}>
          {linkText}
        </Link>
      </p>
    );
  }
}

export default SignHelp;
