const reportRegeratorPort = 9091;
const baseUrl = 'http://localhost:' + reportRegeratorPort + '/gitlab/';

export default function getGitlabUrl() {
    console.log(baseUrl)
} 

export function sum(a, b){
    return (a+b);
}

export function getReportHello(){
    const helloUrl = baseUrl + 'hello';
    return fetch(helloUrl)
    .then(res => res.text())
    .then(response => {
        console.log(response)
    })
}
// http://localhost:9091/gitlab/projects/
export function getAllProjects(){
    const url = baseUrl + 'projects/'
    console.log(url)
    return fetch(url)
           .then(res => res.json())
           .then(response => {
               console.log(response.length);
               const data = response
                if(Array.isArray(data)){
                    const projects = data.map(project => {
                        const{id, description, name, webUrl} = project
                        return {id, description, name, webUrl}
                    })
                    return projects;
                }
           })

}

//http://localhost:9091/gitlab/projects/18625237
export function getProjectById(projectId){
    const url = baseUrl + 'projects/' + projectId
    console.log(url, projectId)
    return fetch(url)
            .then(res => res.json())
            .then(response =>{
                console.log(response)
                const data = response
                const {id, description, name, webUrl} = data
                return {id, description, name, webUrl}
            })
}

// http://localhost:9091/gitlab/projects/users/vane-sanjinez
export function getProjectsByUserId(userId){
    const url = baseUrl + 'projects/users/' + userId
    console.log(url, userId)
    return fetch(url)
           .then(res => res.json())
           .then(response => {
               console.log(response.length);
               const data = response
                if(Array.isArray(data)){
                    const projects = data.map(project => {
                        const{id, description, name, webUrl} = project
                        return {id, description, name, webUrl}
                    })
                    return projects;
                }
           })
    
}

//http://localhost:9091/gitlab/projects/250833/members
export function getProjectMembers(projectId){
    const url = baseUrl + 'projects/' + projectId + '/members';
    console.log(url)
    return fetch(url)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                const data = response;
                if(Array.isArray(data)){
                    const members = data.map(member => {
                        const{id, name, username, webUrl} = member
                        return {id, name, username, webUrl}
                    })
                 return members
                }
            })
}
//commits calls
// http://localhost:9091/gitlab/projects/18625237/commits
export function getCommitsByProjectId(projectId){
    const url = baseUrl + 'projects/' + projectId + '/commits';
    console.log(url);
    return fetch(url)
            .then(res => res.json())
            .then(response => {
                const data = response;
                if(Array.isArray(data)){
                    const commits = data.map(commit => {
                        const{id, authorName, authorEmail, creationDate, message, webUrl} = commit
                        return {id, authorName, authorEmail, creationDate, message, webUrl}
                    })
                 return commits
                }
            })
}

//http://localhost:9091/gitlab/projects/18625237/commits/f482fef4bbb5d8ac99d20b6d80b3f1af50c8b335
export function getCommitById(projectId, commitId){
    const url = baseUrl + 'projects/' + projectId + '/commits/' + commitId;
    console.log(url);
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            const data = response;
            const{id, authorName, authorEmail, creationDate, message, webUrl} = data
            return {id, authorName, authorEmail, creationDate, message, webUrl}
        })
}
//http://localhost:9091/gitlab/projects/18625237/commits/dates?until=2020-09-20&since=2020-07-07
export function getCommitsSinceDate(projectId, since){
    const url = baseUrl + 'projects/' + projectId + '/commits/dates?since=' + since;
    console.log(url);
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            const data = response;
                if(Array.isArray(data)){
                    const commits = data.map(commit => {
                        const{id, authorName, authorEmail, creationDate, message, webUrl} = commit
                        return {id, authorName, authorEmail, creationDate, message, webUrl}
                    })
                 return commits
                }
        })
}
// http://localhost:9091/gitlab/projects/18625237/commits/dates?until=2020-09-20
export function getCommitsUntilDate(projectId, until){
    const url = baseUrl + 'projects/' + projectId + '/commits/dates?until=' + until;
    console.log(url);
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            const data = response;
                if(Array.isArray(data)){
                    const commits = data.map(commit => {
                        const{id, authorName, authorEmail, creationDate, message, webUrl} = commit
                        return {id, authorName, authorEmail, creationDate, message, webUrl}
                    })
                 return commits
                }
        })
}
// http://localhost:9091/gitlab/projects/18625237/commits/dates?since=2019-02-21&until=2019-02-22
export function getCommitsSinceUntilDate(projectId, since, until){
    const url = baseUrl + 'projects/' + projectId + '/commits/dates?since=' + since + '&until=' + until;
    console.log(url);
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            console.log(response)
            const data = response;
                if(Array.isArray(data)){
                    const commits = data.map(commit => {
                        const{id, authorName, authorEmail, creationDate, message, webUrl} = commit
                        return {id, authorName, authorEmail, creationDate, message, webUrl}
                    })
                 return commits
                }
        })
}
//branches
// http://localhost:9091/gitlab/projects/250833/branches
export function getProjectBranches(projectId){
    const url = baseUrl + 'projects/' + projectId + '/branches';
    return fetch(url)
        .then(res => res.json())
        .then(response => {
            const data = response;
                 if(Array.isArray(data)){
                    const branches = data.map(branch => {
                        const {name, merged, webUrl} = branch
                        return {name, merged, webUrl}
                    })
                 return branches
                }
        })
}