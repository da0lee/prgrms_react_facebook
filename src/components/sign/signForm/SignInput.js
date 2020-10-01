import React, { Component } from 'react';

class SignInput extends Component {
  render() {
    const { type, placeholder, required, minLength } = this.props;
    return (
      <input type={type} className="form-control" placeholder={placeholder} minLength={minLength} required={required} />
    );
  }
}

export default SignInput;
