import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Bienvenue sur le blind test</h2>
      </header>
      <div className="App-images">
        <p>Il va falloir modifier le code pour faire un blind test !</p>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
