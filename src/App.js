import logo from './logo.svg';
import './App.css';

const query = async () => {
  const url = 'https://api-mainnet.magiceden.io/rpc/getCollectionEscrowStats/degods?edge_cache=true';
  const data = await fetch(url);
  console.log('data: ', await data.json())
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={query()} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
