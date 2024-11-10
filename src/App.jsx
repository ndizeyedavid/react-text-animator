import { useState } from "react"
import Container from "./components/Container"
import Output from "./components/Output"
import Settings from "./components/Settings"
const App = () => {

  const [text, setText] = useState("MelloW");
  const [size, setSize] = useState(80);
  const [speed, setSpeed] = useState();
  const [color, setColor] = useState("#fff");
  const [animate, triggerAnimation] = useState(false);
  const [animation, setAnimation] = useState("");
  return (
    <>
      <Container>
        <Output animation={animation} text={text} size={size} color={color} speed={speed} animate={animate} />

        <Settings updateText={setText} updateSize={setSize} updateSpeed={setSpeed} updateColor={setColor} triggerAnimation={triggerAnimation} updateAnimation={setAnimation} />

      </Container>
    </>
  )
}

export default App
