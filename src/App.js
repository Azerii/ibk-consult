import "./App.css";
import ClientList from "./components/ClientList";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Note from "./components/Note";
import Spacer from "./components/Spacer";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
