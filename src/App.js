import './App.css';
import { MainRouter } from './components/router';
import Header from './components/base/header'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainRouter/>
    </div>
  );
}

export default App;
