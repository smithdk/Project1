import React, {useContext} from 'react';
import {Card, Table} from "react-bootstrap";
import {RootContext} from "../../store/Root/RootContext";
import {ObjectsContext} from "../../store/Root/ObjectsContext";


const RootListObjects = () => {
    const rootContext = useContext(RootContext)
    const objectsContext = useContext(ObjectsContext)
    const setObject = (id) => {
        objectsContext.setObject(id)
            //console.log(id)
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
                {rootContext.objects.data? rootContext.objects.data.map((item)=>
                        <tr key =  {item.id} onClick={() => {setObject(item.id-1)}}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.addressCountry}</td>
                            <td>{item.addressRegion}</td>
                            <td>{item.addressCity}</td>
                            <td>{item.addressStreet}</td>
                            <td>{item.addressBuildingNumber}</td>
                        </tr>)
                    :null}
                </tbody>
            </Table>
        </Card>
    );
};

export default RootListObjects;