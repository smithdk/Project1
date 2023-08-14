import React from "react";
/*import {objectModel} from "../../utils/rootConsts";
import {RootContext} from "./RootContext";*/

export  const objectModel = {
    id: null,
    creatorId: null,
    editorId: null,
    deleterId: null,
    createdAt: null,
    editedAt: null,
    deletedAt: null,
    comment: null,
    name: null,
    addressCountry: null,
    addressRegion: null,
    addressCity: null,
    addressDistrict: null,
    addressStreet: null,
    addressBuildingNumber: null,
    photo: null
}

const objectsContext = () =>{

/*

    const rootContext = useContext(RootContext)
    const [objectItem, setObjectItem] = useState(objectModel)

    const setObject = (id)=>{
        setObjectItem({name: rootContext.objects.data[id].name})
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
    }
*/

}
export const ObjectsContext = React.createContext(objectsContext);

/*
export {ObjectsContext, objectModel}*/
