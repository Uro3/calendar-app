import React from 'react';
import Calendar from './components/Calendar/Calendar';
import NavBar from './components/NavBar/NavBar';

const App: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <Calendar></Calendar>
    </>
  )
}

export default App;
