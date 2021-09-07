import React from 'react';
import Table from 'react-bootstrap/Table';

export default function ReportDetailsHeader(){
    return (
        // <Table striped bordered hover>
            <tr>
                <th>Commit Date</th>
                {/* <th>Hours</th> */}
                <th>Message</th>
                {/* <th>Percent</th> */}
            </tr>
            // </Table>

    )
}
