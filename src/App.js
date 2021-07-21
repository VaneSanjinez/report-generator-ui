import './App.css';
import './services/GitlabServices'
import createRoutes from './utils/Routes';
import Home from './components/Home';
import ReportComponent from './components/ReportComponent';

function App() {
  const routes = createRoutes();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Home/>
          {routes}
          <ReportComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;
