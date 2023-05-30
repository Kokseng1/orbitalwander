import logo from './logo.svg';
import './App.css';
import Options from './Components/Options';
import Text from './Components/Text';

function App() {
  return (
    <div className="App" style={{textAlign: 'center'}}>
      <h1 class = "header">
      Project Wander
      </h1>
      <p class = "main" style={{ fontSize: '16px' }}>
      <Text />
      <Options />
      </p>
    </div>
  );
}

export default App;