import './App.css';
import './services/GitlabServices'
import createRoutes from './utils/Routes';
import Home from './components/Home';
import ReportComponent from './components/ReportComponent';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListOfMembers from './components/ListOfMembers';
import ReportGenerator from './components/ReportGeneator';
import ReportComponentV2 from './components/ReportComponentV2';

function App() {
  const routes = createRoutes();
  return (
    <div className="App">
      <header className="App-header">
          <Home/>
          <Button>Hey Im a button!</Button>
          {routes}
          <ReportComponentV2/>
          {/* <ReportComponent/> */}
          {/* <ReportGenerator/> */}
      </header>
    </div>
  );
}

export default App;
