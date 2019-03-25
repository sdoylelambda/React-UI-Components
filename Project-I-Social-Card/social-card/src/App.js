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

      <h3>Welcome to React Social Card!</h3>
      <p>
        Begin by exploring the `components` directory. You'll notice we have a
        few files that we've already included in there to get you started right
        away building components. You'll need to make sure you include your
        components that you build in this file to watch your app come to life
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p>
    </div>
  );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
