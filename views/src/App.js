import { BrowserRouter, Route } from 'react-router-dom';
import Background from './Components/Background/Background';
import Button from './Components/Button/Button';
import Head from './Components/Head/Head';
import Main from './Components/Main/Main';
import Popular from './Components/Popular/Popular';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  return (
    <BrowserRouter>
      <Background />
      <Head />
      <Router>
        <Route path='/' element={<Popular />} />
        <Route path='/anime/:id' element={<Anime />} />
      </Router>
      <Main />
    </BrowserRouter>
  );
}

export default App;
