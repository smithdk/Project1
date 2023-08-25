import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";
import {RootContext} from "../../store/Root/RootContext"
import React, {useContext, useEffect, useState} from "react";
import {fetchObjects} from "../../http/objectAPI";
import {ObjectsContext} from "../../store/Root/ObjectsContext";
import EditButtons from "../EditButtons";

const RootUsers = observer(() =>{
    const rootContext = useContext(RootContext)
    const [users, setUsers] = useState({})
    useEffect(()=> {
        fetchObjects().then(data => {setUsers(data)})
    },[])
    const context = {
 /*       objects,
        objID,setObjID,
        readOnly,setReadOnly,
        btnSaveEnable,setBtnSaveEnable
*/
        /*        objectItem,
                setObjectItem,
                setObject,

                setObjects*/
    }

    return(
       <Card className={`${rootContext.usrVisible}  m-0 flex-row col-10`} >
           {users.data &&
               <ObjectsContext.Provider value={context}>
{/*                   <RootTheObject/>*/}
                   <EditButtons mode="users"/>
{/*                   <RootListObjects/>*/}
               </ObjectsContext.Provider>
           }
        </Card>
    )
})

export default RootUsers;