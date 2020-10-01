import React, { Component } from 'react';
import WriteBtn from './WriteBtn';
import WriteTextArea from './WriteTextArea';

class Form extends Component {
  render() {
    const { className, placeholder, btnText } = this.props;
    console.log(className, placeholder, btnText);
    return (
      <form className={className}>
        <WriteTextArea placeholder={placeholder} />
        <WriteBtn btnText={btnText} />
      </form>
    );
  }
}

export default Form;
