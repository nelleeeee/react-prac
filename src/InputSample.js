import React, { useState, useRef } from "react";

export default function InputSample() {
  const [inputs, setInputs] = useState({ name: "", nickname: "" });

  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name} :: {nickname}
      </div>
    </div>
  );
  //   const [text, setText] = useState("d");

  //   const onChange = (e) => {
  //     setText(e.target.value);
  //   };

  //   const onReset = () => {
  //     setText("");
  //   };

  //   return (
  //     <div>
  //         {/* 이벤트 객체(onClick, onChange 등)는 e를 파라미터로 받아와서 사용가능
  //         e.target은 해당 이벤트가 발생한 DOM(여기선 input)을 가르킴
  //         이 DOM의 value를 조회하면(e.target.value) 현재 input에
  //         입력한 값을 알수있음. 이값을 useState를 통해 관리 */}

  //       <input onChange={onChange} value={text} />
  //       <button onClick={onReset}>초기화</button>
  //       <div>
  //         <b>값: {text}</b>
  //       </div>
  //     </div>
  //   );
}
