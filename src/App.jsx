import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import components
import { Button } from 'val-design';
// import styles
import 'val-design/dist/index.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to val-design</p>
        <p>
          <Button btnType="primary" size="large">
            Button
          </Button>
          <Button style={{ marginLeft: '10px' }} btnType="danger" size="large">
            Button
          </Button>
          <Button style={{ marginLeft: '10px' }} btnType="default" size="large">
            Button
          </Button>
          <Button style={{ marginLeft: '10px' }} btnType="primary" size="sm">
            Button
          </Button>
          <Button style={{ marginLeft: '10px' }} btnType="danger" size="sm">
            Button
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
