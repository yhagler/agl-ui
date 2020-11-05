import Table from 'react-bootstrap/Table'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function Schedule() {
    return (
        <div style={{paddingLeft: '100px', paddingRight: '100px', height: '100%'}}>
            <div style={{backgroundColor: 'white'}}>
                <div style={{fontWeight: 'bold', fontSize: '45px', padding: '15px'}}>
                    Schedule
                </div>
                
                <div style={{paddingBottom: '50px', paddingTop: '15px', borderTop: '1px solid #D2D2D2', borderBottom: '1px solid #D2D2D2'}}>
                    <div style={{paddingLeft: '10px', float:'left'}}>
                        <DropdownButton id="dropdown-basic-button" title="Home">
                            <Dropdown.Item href="/home-hagler">Yaakov Hagler</Dropdown.Item>
                            <Dropdown.Item href="/home-brick">Yehuda Brick</Dropdown.Item>
                            <Dropdown.Item href="/home-ennis">Avi Ennis</Dropdown.Item>
                        </DropdownButton>
                    </div>
                    <div >

                    <DropdownButton style={{paddingLeft: '10px', float:'left'}} id="dropdown-basic-button" title="Away">
                        <Dropdown.Item href="/away-hagler">Yaakov Hagler</Dropdown.Item>
                        <Dropdown.Item href="/away-brick">Yehuda Brick</Dropdown.Item>
                        <Dropdown.Item href="/away-ennis">Avi Ennis</Dropdown.Item>
                    </DropdownButton>
                    </div>
                    <DropdownButton style={{paddingLeft: '10px', float:'left'}} id="dropdown-basic-button" title="Game">
                        <Dropdown.Item href="/golf">Golf</Dropdown.Item>
                        <Dropdown.Item href="/archery">Archery</Dropdown.Item>
                        <Dropdown.Item href="/pool">Pool</Dropdown.Item>
                    </DropdownButton>
                </div>
                <div style={{padding: '20px'}}>
                    <p style={{fontWeight: 'bold', fontSize: '25px'}}>
                        Sunday November 5, 2020
                    </p>
                    <Table responsive striped bordered hover>
                        <thead style={{backgroundColor: 'black', color: 'white'}}>
                            <tr>
                            <th>#</th>
                            <th>Home</th>
                            <th>Away</th>
                            <th>Game</th>
                            <th>Score</th>
                            <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            </tr>
                            <tr>
                            <td>2</td>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            </tr>
                            <tr>
                            <td>3</td>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div style={{padding: '20px'}}>
                    <p style={{fontWeight: 'bold', fontSize: '25px'}}>
                        Sunday November 6, 2020
                    </p>
                    <Table responsive striped bordered hover>
                        <thead style={{backgroundColor: 'black', color: 'white'}}>
                            <tr>
                            <th>#</th>
                            <th>Home</th>
                            <th>Away</th>
                            <th>Game</th>
                            <th>Score</th>
                            <th>Comments</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <td key={index}>Table cell 1{index}</td>
                            ))}
                            </tr>
                            <tr>
                            <td>2</td>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <td key={index}>Table cell 2{index}</td>
                            ))}
                            </tr>
                            <tr>
                            <td>3</td>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <td key={index}>Table cell 3{index}</td>
                            ))}
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
};

export default Schedule;