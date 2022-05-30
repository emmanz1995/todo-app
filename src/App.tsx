import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import GlobalStyles from './globalStyles';
import { useSelector, useDispatch } from 'react-redux';
import {getTodos} from './feature/todo/todoSlice';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getTodos())
  }, [])
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
