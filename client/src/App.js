import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import NewsList from './components/NewsList';
import Footer from './components/Footer';


import store from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <NewsList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
