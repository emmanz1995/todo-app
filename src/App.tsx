import React from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/home/Home';
import GlobalStyles from './globalStyles';

function App() {
    return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/todos' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
