const reportRegeratorPort = 9091;
const baseUrl = 'http://localhost:' + reportRegeratorPort + '/';

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
    const url = baseUrl + '/gitlab/projects/'
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