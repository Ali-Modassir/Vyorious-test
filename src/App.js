import React, { Component } from "react";
import styles from "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
