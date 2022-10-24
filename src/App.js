// import logo from './logo.svg';
import "./App.css";
import { Theme, Button } from "react-daisyui";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Theme dataTheme="dark">
        <Button color="primary">Click me, dark!</Button>
      </Theme>

      <Theme dataTheme="light">
        <Button color="primary">Click me, light!</Button>
      </Theme>
    </div>
  );
}

export default App;
