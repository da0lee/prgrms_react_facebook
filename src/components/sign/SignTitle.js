import React, { Component } from 'react';
import css from 'styled-jsx/css';
class SignTitle extends Component {
  render() {
    const { title } = this.props;
    return <h1 className="text-center">{title}</h1>;
  }
}

export default SignTitle;
