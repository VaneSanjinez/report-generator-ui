import React from 'react';
import Table from 'react-bootstrap/Table';
import '../styles/ReportDetailsHeader.css'

export default function ReportDetailsHeader(){
    return (
        // <Table striped bordered hover>
            <thead>
                <tr>
                    <td className = "thead-rep">Commit Date</td>
                    {/* <th>Hours</th> */}
                    <td className = "thead-rep">Message</td>
                    {/* <th>Percent</th> */}
                </tr>
            </thead>
            // </Table>

    )
}
