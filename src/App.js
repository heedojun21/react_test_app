import logo from './logo.svg';
import './App.css';

import Axios from 'axios';
//my 460795841671270
function App() {

const test = async () => {
  let a = Axios.get(`
  https://api.instagram.com/oauth/authorize
  ?client_id=460795841671270
  &redirect_uri=https://heedojun21.github.io/react_test_app/
  &scope=user_profile,user_media
  &response_type=code
  `)
  
  console.log('aaaa',a);
  
}

 


  
test();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
