import {observer} from "mobx-react-lite";
import React, {useContext, useEffect, useState} from "react";
import {Card} from "react-bootstrap";
import {RootContext} from "../../store/Root/RootContext"
import EditButtons from "../EditButtons"
import RootTheObject from "./RootTheObject"
import RootListObjects from "./RootListObjects";
import {ObjectsContext} from "../../store/Root/ObjectsContext";
import {fetchObjects} from "../../http/objectAPI";

const RootObjects = observer(() =>{
    const rootContext = useContext(RootContext)
    const [objects, setObjects] = useState({})
    const [objID, setObjID] = useState(0)
    const [readOnly, setReadOnly] = useState(true)

    useEffect(()=> {
        fetchObjects().then(data => {setObjects(data)})
    },[])

    /*console.log(objectItem)*/
   // const [objectItem, setObjectItem] = useState(objectsContext.objectModel)

/*    const setObject = (id)=>{
       /!* console.log('setObject1')*!/
      /!*  setObjID(id)*!/
        /!*setObjectItem({name: rootContext.objects.data[id].name})*!/
/!*        setObjectItem({addressCountry: rootContext.objects.data[id].addressCountry})*!/
/!*        setObjectItem({addressCountry: rootContext.objects.data[id].addressCountry})
        setObjectItem({addressRegion: rootContext.objects.data[id].addressRegion})
        setObjectItem({addressCity: rootContext.objects.data[id].addressCity})
        setObjectItem({addressDistrict: rootContext.objects.data[id].addressDistrict})
        setObjectItem({addressStreet: rootContext.objects.data[id].addressStreet})
        setObjectItem({addressBuildingNumber: rootContext.objects.data[id].addressBuildingNumber})
        setObjectItem({photo: rootContext.objects.data[id].photo})*!/


/!*
*     name: null,
    addressCountry: null,
    addressRegion: null,
    addressCity: null,
    addressDistrict: null,
    addressStreet: null,
    addressBuildingNumber: null,
    photo: null
*
*
*
* *!/



/!*        setId(rootContext.objects.data[id].id)
        setCreatorId(rootContext.objects.data[id].creatorId)
        setEditorId(rootContext.objects.data[id].editorId)
        setDeleterId(rootContext.objects.data[id].deleterId)
        setCreatedAt(rootContext.objects.data[id].createdAt)
        setEditedAt(rootContext.objects.data[id].editedAt)
        setDeletedAt(rootContext.objects.data[id].deletedAt)
        setComment(rootContext.objects.data[id].comment)
        setName(rootContext.objects.data[id].name)
        setAddressCountry(rootContext.objects.data[id].addressCountry)
        setAddressRegion(rootContext.objects.data[id].addressRegion)
        setAddressCity(rootContext.objects.data[id].addressCity)
        setAddressDistrict(rootContext.objects.data[id].addressDistrict)
        setAddressStreet(rootContext.objects.data[id].addressStreet)
        setAddressBuildingNumber(rootContext.objects.data[id].addressBuildingNumber)
        setPhoto(rootContext.objects.data[id].photo)*!/
    }*/

 /*   const objectContext = useContext(ObjectsContext)*/



 /*   useEffect(()=>{
        console.log(rootContext.objects.data)*/
/*         if (rootContext.objects.data){
           //  objectContext.setObject(objId)
             setObject(objId)
        }
     // eslint-disable-next-line react-hooks/exhaustive-deps
    },[rootContext.objects.data])*/

    const context = {
        objects,
        objID,setObjID,
        readOnly,setReadOnly,
    }

return(
    <Card className={`${rootContext.objVisible} m-0 flex-row col-10 `} style={{margin: 8}}>
        {objects.data &&
            <ObjectsContext.Provider value={context}>
                <RootTheObject/>
                <EditButtons mode="objects"/>
                <RootListObjects/>
            </ObjectsContext.Provider>
        }
    </Card>
    )
})

export default RootObjects;