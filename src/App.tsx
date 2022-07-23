import './App.css';
import { AddWordMenu } from './components/AddWordMenu/AddWordMenu';
import { Header } from './components/Header/Header';
import { Router } from './Router';


function App() {

  return (
    <div className="App">
      <Header />
      <Router />
      <AddWordMenu />
    </div>
  );
}

export default App;
