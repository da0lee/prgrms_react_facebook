import React, { Component } from 'react';
import css from 'styled-jsx/css';
import CardInfo from './cardInfo/CardInfo';

class CardBody extends Component {
  render() {
    return (
      <>
        <div className="card-body">
          <h5 className="card-title">Harry</h5>
          <h6 className="card-subtitle text-muted">10분전</h6>
          <p className="card-text">안녕하세요. 다같이 리엑트를 배워봅시다. 리덕스도 물런 배워야죠</p>
          <hr />
          <CardInfo />
        </div>
        <style jsx>{StyledCardBody}</style>
      </>
    );
  }
}

const StyledCardBody = css`
  .card .card-body {
    padding: 40px;
  }
  .card .card-text {
    padding-top: 20px;
    white-space: pre-wrap;
  }
`;

export default CardBody;
