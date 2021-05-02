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
            //    var {data} = response
               console.log(response.length);
            //    if(response.length > 0){
            //        console.log("length is higher than 0")
                   const data = response
            //    }
               
            //    const {data=[]} = response
               console.log({data})
            //    console.log({data})
                if(Array.isArray(data)){
                    const projects = data.map(project => {
                        const{id, description, name, webUrl} = project
                        return {id, description, name, webUrl}
                    })
                    return projects;
                }
           })

}