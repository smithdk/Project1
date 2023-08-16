import React, {useContext} from 'react';
import {Card, Table} from "react-bootstrap";
import {ObjectsContext} from "../../store/Root/ObjectsContext";


const RootListObjects = () => {

    const objectsContext = useContext(ObjectsContext)
    const selectObject = (id) => {
        objectsContext.setObjID(id)
    }

    return (
        <Card className={`d-flex flex-row m-1 p-1`}>
            <Table striped bordered hover size="sm" className="mb-0">
                <thead className="bg-secondary text-light">
                <tr >
                    <th >#</th>
                    <th>Название</th>
                    <th>Страна</th>
                    <th>Регион</th>
                    <th>Город</th>
                    <th>Улица</th>
                    <th>Дом №</th>
                </tr>
                </thead>
                <tbody>
                {objectsContext.objects.data &&
                    objectsContext.objects.data.map((item)=>
                        <tr key =  {item.id} onClick={() => {selectObject(item.id-1)}}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.addressCountry}</td>
                            <td>{item.addressRegion}</td>
                            <td>{item.addressCity}</td>
                            <td>{item.addressStreet}</td>
                            <td>{item.addressBuildingNumber}</td>
                        </tr>)
                }
                </tbody>
            </Table>
        </Card>
    );
};

export default RootListObjects;