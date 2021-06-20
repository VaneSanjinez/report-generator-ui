// import React from 'react';

// export default function ReportInfo({authorName, commitDate, details, hours, percent}){
//     return ( <div>
//         <h4>{authorName}</h4>
//         <h5>{commitDate}</h5>
//         <span>{details}</span>
//         <h5>{hours}</h5>
//         <h5>{percent}</h5>
//     </div>)
// }

import React, { Component } from 'react';

class ReportInfo extends Component {
    
    render() {
      return ( <div>
        <h4>{this.props.authorName}</h4>
        <h5>{this.props.commitDate}</h5>
        <span>{this.props.details}</span>
        <h5>{this.props.hours}</h5>
        <h5>{this.props.percent}</h5>
    </div>
      );
    }
  }
   
  export default ReportInfo;