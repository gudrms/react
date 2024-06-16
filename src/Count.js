import React, { Component } from "react";

class Count extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; //state를 조회 할 때는 this.state로 조회합니다
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값{fixedNumber}</h2>
        <button
          //onClick을 통해 버튼이 클릭 되었을 떄 호출할 함수를 지정 합니다.
          onClick={() => {
            this.setState({
          number : number+1
          },
            () =>{
            console.log('stste호출');
            console.log(this.state);
          }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Count;
