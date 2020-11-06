import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

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
                <div style={{paddingBottom: '15px', paddingTop: '15px', borderTop: '1px solid #D2D2D2', borderBottom: '1px solid #D2D2D2', display: 'flex', justifyContent: 'center'}}>
                    <Form>
                        <Form.Row controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight: 'bold', fontSize: '18px', paddingTop: '5px'}}>
                                Date*
                            </Form.Label>
                            <Form.Control as="select">
                                <option>Yaakov Hagler</option>
                                <option>Yehuda Brick</option>
                                <option>Avi Ennis</option>
                            </Form.Control>  
                        </Form.Row>                   
                        <Form.Row controlId="exampleForm.ControlInput1">
                            <Form.Label style={{fontWeight: 'bold', fontSize: '18px', paddingTop: '25px'}}>
                                Home*
                            </Form.Label>
                            <Form.Control as="select">
                                <option>Yaakov Hagler</option>
                                <option>Yehuda Brick</option>
                                <option>Avi Ennis</option>
                            </Form.Control>  
                        </Form.Row>
                        <Form.Row controlId="exampleForm.ControlSelect1">
                            <Form.Label style={{fontWeight: 'bold', fontSize: '18px', paddingTop: '25px'}}>
                                Away*
                            </Form.Label>
                            <Form.Control as="select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Row>
                        <Form.Row>
                            <Form.Label style={{fontWeight: 'bold', fontSize: '18px', paddingTop: '25px'}}>
                                Comments
                            </Form.Label>
                            <Form.Control size="lg" type="text" />
                        </Form.Row>
                        <Form.Row style={{paddingTop: '20px'}}>
                            <Button type="submit" block>Submit</Button>
                            <Button className= 'btn btn-primary mr-xl-5 w-100' type="reset">Back</Button>

                        </Form.Row>
                    </Form>
                </div>
            </div>
        </div>
    )
};
    
export default AddGame;