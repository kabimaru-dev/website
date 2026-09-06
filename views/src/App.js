import { BrowserRouter } from 'react-router-dom';
import Background from './Components/Background/Background';
import Button from './Components/Button/Button';
import Head from './Components/Head/Head';
import Main from './Components/Main/Main';
import Popular from './Components/Popular/Popular';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Background />
        <Head />
        <Popular />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
