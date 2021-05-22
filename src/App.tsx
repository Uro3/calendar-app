import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Calendar from './pages/Calendar';

const App: React.FC = () => {
  return (
    <>
      <NavBar></NavBar>
      <Calendar></Calendar>
    </>
  )
}

export default App;
