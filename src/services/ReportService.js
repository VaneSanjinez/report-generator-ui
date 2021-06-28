const reportRegeratorPort = 9091;
const baseUrl = 'http://localhost:' + reportRegeratorPort + '/gitlab/';

//014
// http://localhost:9091/report/gitlab/250833/sazzopardi@gitlab.com
export function getGitlabReportByProjectIdAndUserEmail(projectId, authorEmail){
    const url = 'http://localhost:9091/report/gitlab/'+ projectId +'/'+ authorEmail;
    console.log('this is the url  ' + url)
    return fetch(url)
            .then(res => res.json())
            .then(response => {
                console.log(response)
                const data  = response;
                const {reportInfo, reportDetails} = data
                return {reportInfo, reportDetails};    
                })
}

//019
// http://localhost:9091/report/reportinfo/250833/sazzopardi%40gitlab.com

export function getGitlabReportInfoByProjectIdAndUserEmail(projectId, authorEmail){
    const url = 'http://localhost:9091/report/reportinfo/'+ projectId +'/'+ authorEmail;
    console.log('this is the url  ' + url)
    return fetch(url)
    .then(res => res.json())
    .then(response => {
        console.log(response)
        const data = response;
        const{projectName, projectUrl, currentDate, projectMember} = data
        return {projectName, projectUrl, currentDate, projectMember}
    })  
}
