import './App.css';
import ListOfProjects, { ListOfProjectsByUserId } from './components/ListOfProjects';
import Project, { ProjectById } from './components/Project';
import './services/GitlabServices'
import {Route, Link} from 'wouter';
import ListOfMembers from './components/ListOfMembers';
import { getCommitsByProjectId } from './services/GitlabServices';
import ListOfCommits from './components/ListOfCommits';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* {getGitlabUrl()} */}
        <div>
          <p>Report generator!</p>
          <Route path="/project/:id/members">
            {params => <ListOfMembers projectId={params.id} />}
          </Route>
          <Route path="/project/:id">
            {params => <ProjectById id={params.id} />}
          </Route>
          <Link to='/project/26511109'> Cripto public project </Link>
          <Route path="/projects" component={ListOfProjects}></Route>
          {/* <ListOfProjects className="listProjects"/> */}
          {/* <ListOfProjectsByUserId userId = {'vane-sanjinez'} /> */}
        </div>
        <div>
          {/* <ProjectById id={18625237}/>
          <ListOfMembers projectId={250833}/> */}
          <ListOfCommits projectId = {18625237} />
        </div>
      </header>
    </div>
  );
}

export default App;
