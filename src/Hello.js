import React from "react";

export default function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>} hi {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "무명",
};
