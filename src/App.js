const https = require('https');
import logo from './logo.svg';
import './App.css';

const query = async () => {
  const url = 'https://api-mainnet.magiceden.io/rpc/getCollectionEscrowStats/degods?edge_cache=true';
  const data = await httpGet(url);
  console.log('data: ', data)
}

/**
 * Native http get requests
 * @param {string} url - the url to send HTTP GET request to 
 * @returns {Object | Array<Object>} - data returned from GET request
 */
const httpGet = async (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data = data + chunk.toString(); });
      res.on('end', () => { resolve(JSON.parse(data)); });
      res.on('error', (err) => { reject(err.message); });
    });
  })
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
