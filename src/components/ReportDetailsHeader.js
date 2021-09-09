import React from 'react';
import Table from 'react-bootstrap/Table';

export default function ReportDetailsHeader(){
    return (
        // <Table striped bordered hover>
            <thead>
                <tr>
                    <td>Commit Date</td>
                    {/* <th>Hours</th> */}
                    <td>Message</td>
                    {/* <th>Percent</th> */}
                </tr>
            </thead>
            // </Table>

    )
}
