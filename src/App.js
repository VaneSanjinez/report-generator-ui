import { useEffect, useState } from 'react';
import './App.css';
import ListOfProjects from './components/ListOfProjects';
import './services/GitlabServices'
import getGitlabUrl, { getReportHello, sum } from './services/GitlabServices';

function App() {
  // const [projects, setProjects] = useState([])
  // useEffect(function(){
  //   console.log('effect ran')
  //   fetch('http://localhost:9091/gitlab/projects/')
  //     .then(res =>res.json())
  //     .then(response =>{
  //       const {data} = response
  //       console.log("^^^^^^^^^^^^^^" + {data} + "^^^^^^^^^^^^")
  //       const projects = data.map(project => project.id)
  //       console.log(projects)
  //     })
  //   }, [])

  // useEffect(() => {
  //   fetch('http://localhost:9091/gitlab/projects/')
  //   .then((res) => res.json())
  //   .then((projects) => {
  //     setProjects(projects);
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   }, [])
  // })



  return (
    <div className="App">
      <header className="App-header">
        {getGitlabUrl()}
        <div>
          <p>Report generator!</p>
          <ListOfProjects className="listProjects"/>
        </div>
      </header>
    </div>
  );
}

export default App;
