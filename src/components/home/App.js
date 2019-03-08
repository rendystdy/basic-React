import React, { Component } from 'react';
// import '../  App.css';
import Header from './Header';
import Footer from './Footer';
// import List from './List';
import Top from './Top';
import CustomInput from "./CustomInput";
import "./Header.css"
// import Form from './Form';
// import Main from './Main';

class App extends Component {
  render() {
    return (
      <div>
        <Header list="3 Terbaik" />
        <Top />
        <CustomInput />
        {/* <Form /> */}
        {/* <Main title="Menu Terfavorit 2019" title2="Minuman Terfavorit 2019" title3="The best"/> */}
        {/* <List /> */}
        <Footer name="makanan nusantara" title="rendy setiadi" />
      </div>
    );
  }
}

export default App;
