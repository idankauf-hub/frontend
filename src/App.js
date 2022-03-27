import logo from './logo.svg';
import './App.css';
import Table from './FComp/Table';
import Header from './FComp/Header';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Table/>
      </header>
    </div>
  );
}

export default App;
