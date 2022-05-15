import React from "react";

export const ColorfulMessage = (props) => {
  //propsのオブジェクト要素を一旦各変数に格納すると見やすくなる
  // console.log(props);
  const { color, message, children } = props;
  const setStyle = {
    color, //color: color,の略
    fontSize: "30px"
  };

  return (
    <p style={setStyle}>
      {message}
      {children}
    </p>
  );
};

// export default ColorfulMessage;
