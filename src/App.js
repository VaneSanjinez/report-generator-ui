import { useEffect, useState } from 'react';
import './App.css';
import ListOfProjects from './components/ListOfProjects';
import Project, { ProjectById } from './components/Project';
import './services/GitlabServices'
import getGitlabUrl, { getProjectById, getReportHello, sum } from './services/GitlabServices';
import {Route} from 'wouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {getGitlabUrl()}
        <div>
          <p>Report generator!</p>
          {/* <Route path='/rp/:id' component = {ProjectById}></Route> */}
          <Route path="/rp/:id">
            {params => <ProjectById id={params.id} />}
          </Route>
          {/* <ListOfProjects className="listProjects"/> */}
        </div>
        <div>
          {/* <ProjectById id={18625237}/> */}
        </div>
      </header>
    </div>
  );
}

export default App;
