import React, { Component } from 'react';

class SignBtn extends Component {
  render() {
    const { btnText } = this.props;
    return (
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        {btnText}
      </button>
    );
  }
}

export default SignBtn;
