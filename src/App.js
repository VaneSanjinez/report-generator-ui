import { useEffect, useState } from 'react';
import './App.css';
import ListOfProjects from './components/ListOfProjects';
import Project, { ProjectById } from './components/Project';
import './services/GitlabServices'
import getGitlabUrl, { getProjectById, getReportHello, sum } from './services/GitlabServices';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {getGitlabUrl()}
        <div>
          <p>Report generator!</p>
          {/* <ListOfProjects className="listProjects"/> */}
        </div>
        <div>
          <ProjectById id={18625237}/>
        </div>
      </header>
    </div>
  );
}

export default App;
