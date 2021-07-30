import './App.css';
import './services/GitlabServices'
import createRoutes from './utils/Routes';
import Home from './components/Home';
import ReportComponent from './components/ReportComponent';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfMembers from './components/ListOfMembers';

function App() {
  const routes = createRoutes();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Home/>
          <Button>Hey Im a button!</Button>
          {routes}
          <ReportComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;
