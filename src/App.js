import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import ClientList from "./components/ClientList";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Note from "./components/Note";
import Spacer from "./components/Spacer";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <Router>
      <Route path="/response-recorded" component={ThankYou} />
      <Header />
      <main>
        <Spacer y={6} />
        <MainContent />
        <Spacer y={14.4} />
        <Experience />
        <Spacer y={3.6} />
        <ClientList />
        <Spacer y={14.4} />
        <Note />
        <Spacer y={14.4} />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
