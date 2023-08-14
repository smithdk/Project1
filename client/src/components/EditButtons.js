import React, {useContext} from 'react';
import {Button, Card} from "react-bootstrap";
import {ObjectsContext} from "../store/Root/ObjectsContext";

const EditButtons = () => {
    const objectsContext = useContext(ObjectsContext)
    return (
        <Card  className="m-1" >
            <div className="container row">
                <div className="col-2 "> </div>
                <Button className="col-2 m-1" variant="danger"> Новый </Button>
                <Button className="col-2 m-1" variant="danger" onClick={ () =>{objectsContext.setReadOnly(!objectsContext.readOnly) } }> Редактировать </Button>
                <Button className="col-2 m-1" variant="danger" disabled> Удалить </Button>
                <Button className="col-2 m-1" variant="danger" disabled> Сохранить </Button>
                <div className="col-2 "> </div>
            </div>
        </Card>
    );
};

export default EditButtons;