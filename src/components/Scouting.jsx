import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'


function Scouting() {
    return (
        <div style={{paddingLeft: '100px', paddingRight: '100px', height: '100%'}}>
            <div style={{backgroundColor: 'white'}}>
                <div style={{fontWeight: 'bold', fontSize: '45px', padding: '15px'}}>
                    Scouting
                </div>
                
                <div style={{paddingLeft: '15px', paddingBottom: '15px', paddingTop: '15px', borderTop: '1px solid #D2D2D2', borderBottom: '1px solid #D2D2D2'}}>
                    <Form>
                        <Form.Row className="align-items-center">
                            <Col xs={2} className="my-1">
                                <Form.Label htmlFor="inputPassword5">Player</Form.Label>
                                <Form.Control
                                    as="select"
                                    className="mr-sm-2"
                                    id="inlineFormCustomSelect"
                                    custom
                                >
                                    <option value="0">Player...</option>
                                    <option value="1">Yaakov Hagler</option>
                                    <option value="2">Yehuda Brick</option>
                                    <option value="3">Avi Ennis</option>
                                </Form.Control>
                            </Col>
                            <Col xs={2} className="my-1">
                                <Form.Label htmlFor="inputPassword5">Game</Form.Label>
                                <Form.Control
                                    as="select"
                                    className="mr-sm-2"
                                    id="inlineFormCustomSelect"
                                    custom
                                >
                                    <option value="0">Game...</option>
                                    <option value="1">Archery</option>
                                    <option value="2">Pool</option>
                                    <option value="3">Golf</option>
                                </Form.Control>
                            </Col>
                            <Col xs={2} className="my-1">
                                <Form.Label htmlFor="inputPassword5">Week</Form.Label>
                                <Form.Control
                                    as="select"
                                    className="mr-sm-2"
                                    id="inlineFormCustomSelect"
                                    custom
                                >
                                    <option value="0">Current Week</option>
                                    <option value="1">Week 1</option>
                                    <option value="2">Week 2</option>
                                    <option value="3">Week 3</option>
                                </Form.Control>
                            </Col>
                            <Col xs="auto" className="my-1">
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </div>
                <div style={{padding: '20px'}}>
                    <p style={{fontWeight: 'bold', fontSize: '40px', textAlign: 'center'}}>
                        Week 4
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
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Pagination>
                        <Pagination.First />
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>
                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item active>{4}</Pagination.Item>
                        <Pagination.Ellipsis />
                        <Pagination.Item>{8}</Pagination.Item>
                        <Pagination.Item disabled>{9}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Next />
                        <Pagination.Last />
                    </Pagination>
                    </div>
                </div>
            </div>
        </div>
    )
};
    
export default Scouting;