import React from 'react';
import ReactDOM from 'react-dom';


import Header from './components/HeaderComponents/HeaderContainer';
import HeaderContent from './components/HeaderComponents/HeaderContent';
import CardContent from './components/CardComponents/CardContent'
import ImageThumbnail from './components/HeaderComponents/ImageThumbnail';
import CardImageThumbnail from './components/CardComponents/CardImageThumbnail';
import CardBanner from './components/CardComponents/CardBanner';
import CardContainer from './components/CardComponents/CardContainer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="testing">
        <ImageThumbnail />
        <Header />
        <HeaderContent />
      </div>
        <CardContainer />
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
