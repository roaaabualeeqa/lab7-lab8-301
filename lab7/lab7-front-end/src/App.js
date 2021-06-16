import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import './assets/css/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
    }
  }

  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;