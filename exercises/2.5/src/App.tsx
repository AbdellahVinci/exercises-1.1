// src/App.tsx
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ClickCounter from './ClickCounter/ClickCounter';


function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ClickCounter titre="Click Counter" message="You are a master in the art of clicking!" />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
