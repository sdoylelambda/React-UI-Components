import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Header from './components/HeaderComponents/HeaderContainer';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardContent from './components/CardComponents/CardContent'
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardImageThumbnail from './components/CardComponents/CardImageThumbnail';

const App = () => {
  return (
    <div className="App">
    <ImageThumbnail />
    <Header />
    <HeaderContent />
    <CardImageThumbnail />
    <CardContent />

      
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
