import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import DateTimePicker from "react-widgets";
//import React, { useState } from "react";



function AddGame() {
    //const [startDate, setStartDate] = useState(new Date());

    
    return (
        <div style={{paddingLeft: '100px', paddingRight: '100px', height: '100%'}}>
            <div style={{backgroundColor: 'white'}}>
                <div style={{fontWeight: 'bold', fontSize: '45px', padding: '15px'}}>
                        Add Game
                </div>
                <Form>
                    <Form.Row controlId="exampleForm.ControlInput1">
                        <Form.Label column="lg" lg={2}>
                            Date*
                        </Form.Label>
                        <Col>
                          
                        </Col>  
                    </Form.Row>                   
                    <Form.Row controlId="exampleForm.ControlInput1">
                        <Form.Label column="lg" lg={2}>
                            Home*
                        </Form.Label>
                        <Col>
                            <Form.Control as="select" className="mr-sm-2" style={{width: '200px'}}>
                                <option>Yaakov Hagler</option>
                                <option>Yehuda Brick</option>
                                <option>Avi Ennis</option>
                            </Form.Control>  
                        </Col>         
                    </Form.Row>
                    <Form.Row controlId="exampleForm.ControlSelect1">
                        <Form.Label column="lg" lg={2}>
                            Away*
                        </Form.Label>
                        <Col>
                            <Form.Control as="select" style={{width: '200px'}}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column="lg" lg={2} style={{width:'200px'}}>
                            Comments
                        </Form.Label>
                        <Col>
                            <Form.Control size="lg" type="text" />
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        </div>
    )
};
    
export default AddGame;