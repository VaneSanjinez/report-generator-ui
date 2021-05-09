import { useEffect, useState } from 'react';
import './App.css';
import ListOfProjects, { ListOfProjectsByUserId } from './components/ListOfProjects';
import Project, { ProjectById } from './components/Project';
import './services/GitlabServices'
import getGitlabUrl, { getProjectById, getProjectMembers, getProjectsByUserId, getReportHello, sum } from './services/GitlabServices';
import {Route, Link} from 'wouter';
import ListOfMembers from './components/ListOfMembers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {getGitlabUrl()}
        <div>
          <p>Report generator!</p>
          <Route path="/rp/:id">
            {params => <ProjectById id={params.id} />}
          </Route>
          <Link to='/rp/26511109'> Cripto public project </Link>
          {/* <ListOfProjects className="listProjects"/> */}
          <ListOfProjectsByUserId userId = {'vane-sanjinez'} />
        </div>
        <div>
          {/* <ProjectById id={18625237}/> */}
          <ListOfMembers projectId={250833}/>
        </div>
      </header>
    </div>
  );
}

export default App;
