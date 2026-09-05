import Button from './Components/Button/Button';
import Popular from './Components/Popular/Popular';

function App() {
  return (
    <div>
      <Button text="1. Hello World!" onClick={() => console.log("1. Hello, World!")} protagonist/>
      <Button text="2. Hello World!" onClick={() => console.log("2. Hello, World!")} protagonist/>
      <Button text="3. Hello World!" onClick={() => console.log("3. Hello, World!")} protagonist/>
      <Button text="4. Hello World!" onClick={() => console.log("4. Hello, World!")} protagonist/>
      <Button text="5. Hello World!" onClick={() => console.log("5. Hello, World!")} protagonist/>
      <Popular />
    </div>
  );
}

export default App;
