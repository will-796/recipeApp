import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import Routes from './routes/Routes';
// import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Provider>
      <Header />
      <Routes />
      <Footer />
    </Provider>
  );
}

export default App;
