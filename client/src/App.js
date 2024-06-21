import React from 'react';
import Home from './pages/Home';
import OnBoarding from './pages/OnBoarding';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies, , removeCookie] = useCookies(['user']);
  const authToken = cookies.AuthToken;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home removeCookie={removeCookie} />} />
        {authToken && <Route path="/onboarding" element={<OnBoarding />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
