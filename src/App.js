import './App.css';
import Jawaban1 from './component/jawaban1'
import Jawaban3 from './component/jawaban3'
import Jawaban4 from './component/jawaban4'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <table border='2'className='tabel'>
        <tr>
          <td colspan='2'>Ujian CODEVA</td>
        </tr>
        <tr>
          <td>Soal no. 1</td>
          <td><Jawaban1 /></td>
        </tr>
        <tr>
          <td>Soal no. 2</td>
          <td>Jawabaan</td>
        </tr>
        <tr>
          <td>Soal no. 3</td>
          <td><Jawaban3 /></td>
        </tr>
        <tr>
          <td>Soal no. 4</td>
          <td><Jawaban4 /></td>
        </tr>
      </table>


    </div>
  );
}

export default App;
