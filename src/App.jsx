import React from "react";

import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("a");
  const setStyle = {
    color: "red",
    fontSize: "18px"
  };
  return (
    <>
      <h1 style={setStyle}>こんにちは</h1>
      <ColorfulMessage color="blue" message="enjoy" />
      <ColorfulMessage color="red">
        propsのチルドレンを使っています
      </ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
