import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Background from './Components/Background/Background';
import Button from './Components/Button/Button';
import Head from './Components/Head/Head';
import Main from './Components/Main/Main';
import Popular from './Components/Popular/Popular';
import SearchBar from './Components/SearchBar/SearchBar';
import AnimeItem from './Components/AnimeItem/AnimeItem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
            <>
              <Background />
              <Head />
              <Popular />
              <Main />
            </>
          } />
        <Route path='/anime/:id' element={
          <AnimeItem />
          } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
