import logo from './logo.svg';
import './App.css';
import PageHeader from './components/PageHeader/PageHeader';
import Books from './components/Books/Books';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <Books/>
    </div>
  );
}

export default App;
