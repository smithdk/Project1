import React, {useContext} from 'react';
import {Card, Col, Form, Image} from "react-bootstrap";
import {ObjectsContext} from "../../store/Root/ObjectsContext";

const RootTheObject = () => {
    const objectsContext = useContext(ObjectsContext)
 /*   const rootContext = useContext(RootContext)*/
 /*   console.log(objectsContext.objectItem)*/
    /*console.log(rootContext.objects.data)*/
    /*console.log("RootTheObject ", objectsContext.readOnly)*/


    return (
        <div>
                <Card className={`d-flex flex-row m-1`}>
                    <Image className="flex-column m-0 p-0" style={{width: 150, height: 200}} src="noimage.jpeg" rounded />
                    <Col className="flex-column" >
                        <div className="text-center">
                            <h2 className="fw-bold "> Объект</h2>
                        </div>
{/*                        <input
                            value={objectsContext.objects.data[objectsContext.objID].name}
                        />*/}
                        <Form className="d-flex flex-row  p-1 pt-0 pb-0">
                            <Form.Label   className="mt-2 m-1" style={{width:110}}>Название</Form.Label>
                            <Form.Control className="m-0" style={{width:150}}
                                          value={objectsContext.objects.data[objectsContext.objID].name}
                                          readOnly={objectsContext.readOnly}
                            />
                            <Form.Label   className="mt-2 m-1" style={{width:55}}>Страна</Form.Label>
                            <Form.Control className="m-0" style={{width:100}}
                                          value={objectsContext.objects.data[objectsContext.objID].addressCountry}
                                          readOnly={objectsContext.readOnly}
                            />
                            <Form.Label   className="mt-2 m-1" style={{width:55}}>Регион</Form.Label>
                            <Form.Control className="m-0" style={{width:230}}
                                          value={objectsContext.objects.data[objectsContext.objID].addressRegion}
                                          readOnly={objectsContext.readOnly}
                            />
                            <Form.Label   className="mt-2 m-1" style={{width:55}}>Город</Form.Label>
                            <Form.Control className="m-0" style={{width:100}}
                                          value={objectsContext.objects.data[objectsContext.objID].addressCity}
                                          readOnly={objectsContext.readOnly}
                            />
                        </Form>
                        <Form className="d-flex flex-row  p-1 pt-0 pb-0 mt-1">
                            <Form.Label   className="mt-2 m-1" style={{width:110}}>Район</Form.Label>
                            <Form.Control className="m-0" style={{width:150}}
                                          value={objectsContext.objects.data[objectsContext.objID].addressDistrict}
                                          readOnly={objectsContext.readOnly}
                            />
                            <Form.Label   className="mt-2 m-1" style={{width:55}}>Улица</Form.Label>
                            <Form.Control className="m-0" style={{width:190}}
                                          value={objectsContext.objects.data[objectsContext.objID].addressStreet}
                                          readOnly={objectsContext.readOnly}
                            />
                            <Form.Label   className="mt-2 m-1" style={{width:55}}>Дом #</Form.Label>
                            <Form.Control className="m-0" style={{width:70}}
                                          value={objectsContext.objects.data[objectsContext.objID].addressBuildingNumber}
                                          readOnly={objectsContext.readOnly}
                            />
                            <Form.Label   className="mt-2 m-1" style={{width:40}}>Фото</Form.Label>
                            <Form.Control className="m-0" style={{width:185}}
                                          value={objectsContext.objects.data[objectsContext.objID].photo}
                                          readOnly={objectsContext.readOnly}
                            />
                        </Form>
                        <Form className="d-flex flex-row  p-1 pt-0 pb-0 mt-1">
                            <Form.Label   className="mt-2 m-1" style={{width:110}}>Комментарий </Form.Label>
                            <Form.Control className="m-0" style={{width:770}}
                                          value={objectsContext.objects.data[objectsContext.objID].comment}
                                          readOnly={objectsContext.readOnly}
                            />
                        </Form>
                    </Col>
                </Card>
       </div>
    );
};

export default RootTheObject;