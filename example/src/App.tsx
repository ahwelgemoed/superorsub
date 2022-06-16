import './App.css';
import { SubSuper } from 'superorsub';
import { useState } from 'react';

const mySubOrSuper = SubSuper.getInstance({
  subOrSuper: 'supValue',
});
function App() {
  const [myTestInput, setMyTestInput] = useState<string>('H₂O');
  return (
    <div className="App">
      <img src="https://raw.githubusercontent.com/ahwelgemoed/superorsub/main/example/assets/logo.png" />
      <h3>
        Press <kbd>control</kbd> + <kbd>shift</kbd> and number to write in sub-
        or super script
      </h3>
      <p>
        <button onClick={() => mySubOrSuper.toggleScript()}>Toggle</button>
        <button onClick={() => mySubOrSuper.setToSupScript()}>
          Super Script
        </button>
        <button onClick={() => mySubOrSuper.setToSubScript()}>
          Sub Script
        </button>
      </p>
      <h5>Value in State: {myTestInput}</h5>
      <input
        value={myTestInput}
        onChange={e => setMyTestInput(e.target.value)}
      />
    </div>
  );
}

export default App;
