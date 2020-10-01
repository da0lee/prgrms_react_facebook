import React, { Component } from 'react';

class WriteBtn extends Component {
  render() {
    const { btnText } = this.props;
    return (
      <button type="submit" className="btn btn-primary">
        {btnText}
      </button>
    );
  }
}

export default WriteBtn;
