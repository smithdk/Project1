import React, {useContext} from 'react';
import {Button, Card} from "react-bootstrap";
import {ObjectsContext} from "../store/Root/ObjectsContext";
import * as rootUtl from "../utils/rootUtils"



const EditButtons = (props) => {

    const objectsContext = useContext(ObjectsContext)
    console.log(props.mode)
    return (
        <Card  className="m-1" >
            <div className="container row">
                <div className="col-2 "> </div>
                <Button className="col-2 m-1" variant="danger" onClick = {() => {rootUtl.btnObjNewOnClick(objectsContext)}}> Новый </Button>
                <Button className="col-2 m-1" variant="danger"> Редактировать  </Button>
                <Button className="col-2 m-1" variant="danger"> Удалить </Button>
                <Button className={`col-2 m-1 ${objectsContext.btnSaveEnable}`} variant="danger" onClick = {() => {rootUtl.btnObjSaveOnClick(objectsContext)}}> Сохранить </Button>
                <div className="col-2 "> </div>
            </div>
        </Card>
    );
};


export default EditButtons;