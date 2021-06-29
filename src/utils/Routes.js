import React from 'react';
import {Route, Link, Router} from 'wouter';
import ListOfMembers from '../components/ListOfMembers';
import { ProjectById } from '../components/Project';
import ListOfProjects from '../components/ListOfProjects';
import { ListOfProjectsByUserId } from '../components/ListOfProjects';
import ListOfCommits from '../components/ListOfCommits';
import { CommitById } from '../components/Commit';
import { ListOfCommitsSinceDate, ListOfCommitsUntilDate, ListOfCommitsSinceUntilDates } from '../components/ListOfCommits';
import ListOfBranches from '../components/ListOfBranches';
import { BranchById } from '../components/Branch';
import { UserByEmail } from '../components/User';

const createRoutes = () => (
    <Router>
        <Route path="/projects/:id/members">
            {params => <ListOfMembers projectId={params.id} />}
        </Route>
        <Route path="/projects/:id">
                {params => <ProjectById id={params.id} />}
        </Route>
        {/* <Link to='/project/26511109'> Cripto public project </Link> */}
        <Route path="/projects" component={ListOfProjects} />
        <Route path="/projects/users/:owner">
            {params => <ListOfProjectsByUserId userId = {params.owner} /> }
        </Route>
        <Route path="/projects/commits/:id">
            {params => <ListOfCommits projectId = {params.id} />}
        </Route>
        {/* <CommitById projectId={18625237} commitId = {'f482fef4bbb5d8ac99d20b6d80b3f1af50c8b335'} */}
        <Route path = "/projects/:id/commits/:commitId">
            {params => <CommitById projectId={params.id} commitId = {params.commitId}/>}
        </Route>
        {/* <ListOfCommitsSinceDate projectId ={18625237} sinceDate = {'2020-07-07'}/> */}
        <Route path="/projects/:id/sinceDate/:since">
            {params => <ListOfCommitsSinceDate projectId ={params.id} sinceDate = {params.sinceDate}/>}
        </Route>
         {/* <ListOfCommitsUntilDate projectId={18625237} untilDate={'2020-09-20'} /> */}
         <Route path="/projects/:id/untilDate/:until">
            {params => <ListOfCommitsUntilDate projectId ={params.id} sinceDate = {params.until}/>}
        </Route>
        {/* <ListOfCommitsSinceUntilDates projectId = {18625237} sinceDate={'2019-02-21'} untilDate = {'2019-02-22'}/> */}
        <Route path="/projects/:id/dates/:since/:until">
            {params => <ListOfCommitsSinceUntilDates projectId = {params.id} sinceDate={params.since} untilDate = {params.until}/>}
        </Route>
         {/* <ListOfBranches projectId = {250833}/> */}
         <Route path="/projects/:id/branches">
             {params => <ListOfBranches projectId = {params.id}/>}
         </Route>
         {/* <BranchById projectId = {250833} branchName = {'1-10-stable'}/> */}
         <Route path="/projects/:id/branches/:branchId">
             {params => <BranchById projectId = {params.id} branchName = {params.banchId}/>}
         </Route>
         {/* <UserByEmail email={'sazzopardi@gitlab.com'} /> */}
         <Route path="users/:userEmail">
             {params => <UserByEmail email={params.userEmail} /> }
         </Route>
    </Router>
);

export default createRoutes;