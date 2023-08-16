import React, {useContext} from 'react';
import {Card, Col, Form, Image} from "react-bootstrap";
import {ObjectsContext} from "../../store/Root/ObjectsContext";

const RootTheObject = () => {
    const objectsContext = useContext(ObjectsContext)
 /*   const rootContext = useContext(RootContext)*/
 /*   console.log(objectsContext.objectItem)*/
    /*console.log(rootContext.objects.data)*/
    console.log("RootTheObject ", objectsContext.objID)


    return (
        <div>
                <Card className={`d-flex flex-row m-1`}>
                    <Image className="flex-column m-0 p-0" style={{width: 150, height: 200}} src="noimage.jpeg" rounded />
                    <Col className="flex-column" >
                        <div className="text-center">
                            <h2 className="fw-bold "> Объект {objectsContext.objects.data[objectsContext.objID].name}</h2>
                        </div>
{/*                        <input
                            value={objectsContext.objects.data[objectsContext.objID].name}
                        />*/}
                        <Form className="d-flex flex-row  p-1 pt-0 pb-0">
                            <Form.Label   className="mt-2 m-1" style={{width:71}}>Название</Form.Label>
                            <Form.Control className="m-0" style={{width:150}}
                                          value={objectsContext.objects.data[objectsContext.objID].name}
                                          readOnly={true}
                            />

{/*                            <Form.Control className="m-0" style={{width:150}} type="text"
                                          id = "1"
                                          defaultValue={objectsContext.objects.data[objectsContext.objID].name}
                                          readOnly = {objectsContext.readOnly}
                            />
                            <Form.Label   className="mt-2 m-1 " style={{width:52}}>Страна</Form.Label>
                            <Form.Control className="m-0" style={{width:100}} type="text"
                                          id = "1"
                                          defaultValue={objectsContext.objects.data[objectsContext.objID].addressCountry}
                                          readOnly = {objectsContext.readOnly}
                            />*/}
                        </Form>
                    </Col>
                </Card>
       </div>
    );
};

export default RootTheObject;