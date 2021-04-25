import './App.css';
import './services/GitlabServices'
import getGitlabUrl, { getReportHello, sum } from './services/GitlabServices';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {getGitlabUrl()}
        {console.log(sum(100,5))}
        {console.log(getReportHello())}
        <p>
          <p>Report generator!</p>
        </p>
      </header>
    </div>
  );
}

export default App;
