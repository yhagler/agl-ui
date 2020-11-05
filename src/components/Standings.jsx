import ToggleButton from 'react-bootstrap/ToggleButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import React, { useState } from "react";
import Table from 'react-bootstrap/Table'


function Schedule() {
    const [radioValue, setRadioValue] = useState('1');
  
    const radios = [
      { name: 'League', value: '1' },
      { name: 'Division', value: '2' },
    ];
    
    return (
        <div style={{paddingLeft: '100px', paddingRight: '100px'}}>
            <div style={{backgroundColor: 'white'}}>
                <div style={{fontWeight: 'bold', fontSize: '45px', padding: '15px'}}>
                        Standings
                </div>
                <div style={{paddingBottom: '15px', paddingTop: '15px', paddingLeft: '10px', borderTop: '1px solid #D2D2D2', borderBottom: '1px solid #D2D2D2'}}>
                    <ButtonGroup toggle>
                        {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            type="radio"
                            variant="secondary"
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                            {radio.name}
                        </ToggleButton>
                        ))}
                    </ButtonGroup>
                </div>
                {radioValue === '1' ? 
                    <div style={{paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px'}}>
                        <p style={{fontWeight: 'bold', fontSize: '25px', textAlign: 'center'}}>
                            League Standings
                        </p>
                        <Table responsive striped hover>
                            <thead style={{backgroundColor: 'black', color: 'white'}}>
                                <tr>
                                    <th>#</th>
                                    <th>Place</th>
                                    <th>W</th>
                                    <th>L</th>
                                    <th>PCT</th>
                                    <th>GB</th>
                                    <th>Home</th>
                                    <th>Home PCT</th>
                                    <th>Away</th>
                                    <th>Away PCT</th>
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
                :
                    <div style={{paddingLeft: '20px', paddingRight: '20px', paddingTop: '20px'}}>
                        <p style={{fontWeight: 'bold', fontSize: '25px', textAlign: 'center'}}>
                            North Wing
                        </p>
                        <Table responsive striped bordered hover>
                            <thead style={{backgroundColor: 'black', color: 'white'}}>
                                <tr>
                                    <th>#</th>
                                    <th>Place</th>
                                    <th>W</th>
                                    <th>L</th>
                                    <th>PCT</th>
                                    <th>GB</th>
                                    <th>Home</th>
                                    <th>Home PCT</th>
                                    <th>Away</th>
                                    <th>Away PCT</th>
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
                        <p style={{fontWeight: 'bold', fontSize: '25px', textAlign: 'center'}}>
                            South Wing
                        </p>
                        <Table responsive striped bordered hover>
                            <thead style={{backgroundColor: 'black', color: 'white'}}>
                                <tr>
                                    <th>#</th>
                                    <th>Place</th>
                                    <th>W</th>
                                    <th>L</th>
                                    <th>PCT</th>
                                    <th>GB</th>
                                    <th>Home</th>
                                    <th>Home PCT</th>
                                    <th>Away</th>
                                    <th>Away PCT</th>
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
                }
            </div>
        </div>
    )
};
    
export default Schedule;