import './App.css';
import ListOfProjects, { ListOfProjectsByUserId } from './components/ListOfProjects';
import Project, { ProjectById } from './components/Project';
import './services/GitlabServices'
import ListOfMembers from './components/ListOfMembers';
import { getCommitsByProjectId, getCommitsSinceDate, getGitlabReportByProjectIdAndUserEmail, getProjectBranches } from './services/GitlabServices';
import ListOfCommits, { ListOfCommitsSinceDate, ListOfCommitsSinceUntilDates, ListOfCommitsUntilDate } from './components/ListOfCommits';
import { CommitById } from './components/Commit';
import ListOfBranches from './components/ListOfBranches';
import { BranchById } from './components/Branch';
import {GitlabReportInfo, GitlabReportDetails} from './components/Report';
import {UserByEmail} from './components/User';
import createRoutes from './utils/Routes';

function App() {
  const routes = createRoutes();
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Report generator</p>
          {routes}
        </div>
        <div>
          <GitlabReportInfo projectId ={250833} authorEmail = {'sazzopardi@gitlab.com'}/>
          <GitlabReportDetails projectId ={250833} authorEmail = {'sazzopardi@gitlab.com'}/>
        </div>
      </header>
    </div>
  );
}

export default App;
