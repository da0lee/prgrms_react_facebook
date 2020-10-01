import React, { Component } from 'react';

class TextArea extends Component {
  render() {
    const { placeholder } = this.props;
    return <textarea className="form-control input-lg" placeholder={placeholder} spellCheck="false"></textarea>;
  }
}

export default TextArea;
