import React, { useState } from "react";

// 컴포넌트에서 동적인 값을 state라고 함
// useState는 상태(state)의 디폴트 값을 넣어서 호출
// 호출하면 배열이 반환됨. 첫번째[0] 원소는 상태(state), 두번째 원소[1]는 Setter함수
export default function Counter() {
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];
  // 위 3줄짜리 코드를 배열 비구조화 할당으로ㅓ 추출한것
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    // setNumber(number + 1);
    setNumber((prevNumber) => prevNumber + 1);
  };
  const onDecrease = () => {
    // setNumber(number - 1);
    setNumber((prevNumber) => prevNumber - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}
