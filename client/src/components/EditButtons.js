import React, {useContext} from 'react';
import {Button, Card} from "react-bootstrap";
import {ObjectsContext} from "../store/Root/ObjectsContext";
import * as rootUtl from "../utils/rootUtils"
import {RootContext} from "../store/Root/RootContext";

const EditButtons = (props) => {

    const objectsContext = useContext(ObjectsContext)
    const rootContext = useContext(RootContext)
    const rootState = {
      btnSaveEnable:   rootContext.setBtnSaveEnable
    }
    let btnNewOnClick  = ()=> {}
    let btnSaveOnClick = ()=> {}


    switch (props.mode){
        case 'objects':
            btnNewOnClick  = ()=> rootUtl.btnObjNewOnClick(objectsContext,rootState);
            btnSaveOnClick = ()=> rootUtl.btnObjSaveOnClick(objectsContext,rootState);
            break;
        case 'users':
            btnNewOnClick  = ()=> rootUtl.btnUsrNewOnClick(rootState);
            btnSaveOnClick = ()=> rootUtl.btnUsrSaveOnClick(rootState)
            break;
        default: {}
    }

    return (
        <Card  className="m-1" >
            <div className="container row">
                <div className="col-2 "> </div>
                <Button className="col-2 m-1" variant="danger" onClick = {btnNewOnClick} > Новый </Button>
                <Button className="col-2 m-1" variant="danger"> Редактировать  </Button>
                <Button className="col-2 m-1" variant="danger"> Удалить </Button>
                <Button className={`col-2 m-1 ${rootContext.btnSaveEnable}`} variant="danger" onClick = {btnSaveOnClick}> Сохранить </Button>
                <div className="col-2 "> </div>
            </div>
        </Card>
    );
};

export default EditButtons;