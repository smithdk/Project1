import React, {useContext} from 'react';
import {Button, Card} from "react-bootstrap";
import {ObjectsContext} from "../store/Root/ObjectsContext";
import * as rootUtl from "../utils/rootUtils"
/*import {RootContext} from "../store/Root/RootContext";*/

const EditButtons = (props) => {

    const objectsContext = useContext(ObjectsContext)
   /* const rootContext = useContext(RootContext)*/
    let btnNewOnClick = ()=> {}
    let btnSaveOnClick =  ()=> {}

    switch (props.mode){
        case 'objects':
            btnNewOnClick  = ()=> rootUtl.btnObjNewOnClick(objectsContext);
            btnSaveOnClick = ()=> rootUtl.btnObjSaveOnClick(objectsContext);
            break;
        case 'users':
            btnNewOnClick  = ()=> rootUtl.btnUsrNewOnClick(objectsContext);
            btnSaveOnClick = ()=> rootUtl.btnUsrSaveOnClick(objectsContext)
            break;
        default: {}
    }

    return (
        <Card  className="m-1" >
            <div className="container row">
                <div className="col-2 "> </div>
                {/*<Button className="col-2 m-1" variant="danger" onClick = {() => {rootUtl.btnObjNewOnClick(objectsContext)}}> Новый </Button>*/}
                <Button className="col-2 m-1" variant="danger" onClick = {btnNewOnClick} > Новый </Button>
                <Button className="col-2 m-1" variant="danger"> Редактировать  </Button>
                <Button className="col-2 m-1" variant="danger"> Удалить </Button>
                {/*<Button className={`col-2 m-1 ${objectsContext.btnSaveEnable}`} variant="danger" onClick = {() => {rootUtl.btnObjSaveOnClick(objectsContext)}}> Сохранить </Button>*/}
                <Button className={`col-2 m-1 ${objectsContext.btnSaveEnable}`} variant="danger" onClick = {btnSaveOnClick}> Сохранить </Button>
                <div className="col-2 "> </div>
            </div>
        </Card>
    );
};


export default EditButtons;