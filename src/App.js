import './App.css';
import { MainRouter } from './router';
import Header from './components/base/header'

function App() {
  return (
    <div className="App">
      <header>
       <Header/>
      </header>
      <MainRouter/>
    </div>
  );
}

export default App;
