import React from 'react';

class Table extends React.Component {
    render() {
        return (
            <table>
                    <thead>
                        <tr>
                            <th>Task</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Complete the NodeJS course</td>
                            <td>true</td>
                        </tr>
                        <tr>
                            <td>Complete Ex.01 of the React Course</td>
                            <td>false</td>
                        </tr>
                    </tbody>
                </table>
        );
    }
}

export default Table;