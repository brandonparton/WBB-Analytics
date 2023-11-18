import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import PlayersPage from './pages/Stats/PlayersPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/players" element={<PlayersPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
