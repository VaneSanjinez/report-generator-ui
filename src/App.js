import './App.css';
import ListOfProjects, { ListOfProjectsByUserId } from './components/ListOfProjects';
import Project, { ProjectById } from './components/Project';
import './services/GitlabServices'
import {Route, Link} from 'wouter';
import ListOfMembers from './components/ListOfMembers';
import { getCommitsByProjectId, getCommitsSinceDate, getGitlabReportByProjectIdAndUserEmail, getProjectBranches } from './services/GitlabServices';
import ListOfCommits, { ListOfCommitsSinceDate, ListOfCommitsSinceUntilDates, ListOfCommitsUntilDate } from './components/ListOfCommits';
import { CommitById } from './components/Commit';
import ListOfBranches from './components/ListOfBranches';
import { BranchById } from './components/Branch';
import {GitlabReport} from './components/Report';

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
          {/* <ListOfCommits projectId = {18625237} /> */}
          {/* <CommitById projectId={18625237} commitId = {'f482fef4bbb5d8ac99d20b6d80b3f1af50c8b335'}/> */}
          {/* <ListOfCommitsSinceDate projectId ={18625237} sinceDate = {'2020-07-07'}/> */}
          {/* <ListOfCommitsUntilDate projectId={18625237} untilDate={'2020-09-20'} /> */}
          {/* <ListOfCommitsSinceUntilDates projectId = {18625237} sinceDate={'2019-02-21'} untilDate = {'2019-02-22'}/> */}
          {/* <ListOfBranches projectId = {250833}/> */}
          {/* <BranchById projectId = {250833} branchName = {'1-10-stable'}/> */}
          <GitlabReport projectId = {250833} authorEmail = {'sazzopardi@gitlab.com'}/>
          {/* <GitlabReport projectId = {250833}/> */}
          {/* {getGitlabReportByProjectIdAndUserEmail(250833, 'sazzopardi@gitlab.com')} */}
        </div>
      </header>
    </div>
  );
}

export default App;
