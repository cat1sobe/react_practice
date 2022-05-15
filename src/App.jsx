import React, { useEffect, useState } from "react";

import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  const [face, setFace] = useState(true);
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickRe = () => {};

  useEffect(() => {
    if (num % 3 === 0) {
      face || setFace(true);
    } else {
      face && setFace(false);
    }
  }, [num]);

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
      <button onClick={onClickButton}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickRe}>再レンダリング</button>
      {face && <p>aaa</p>}
    </>
  );
};

export default App;
