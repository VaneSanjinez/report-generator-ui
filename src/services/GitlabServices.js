const port = 9091;
const baseUrl = 'http://localhost:' + port + '/';

export default function getGitlabUrl() {
    console.log("*********************")
    console.log(baseUrl)
    console.log("*********************")
} 

export function sum(a, b){
    return (a+b);
}

export function getReportHello(){
    const helloUrl = baseUrl + 'hello';
    console.log(helloUrl)
    return  fetch(helloUrl)
    .then(res => res.text())
    .then(response => {
        console.log(response)
    })
}