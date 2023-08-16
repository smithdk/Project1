import NavBar from "../components/NavBar"
import RootListGroup from "../components/Root/RootListGroup";
import RootObjects from "../components/Root/RootObjects";
import RootUsers from "../components/Root/RootUsers";
import {RootContext} from "../store/Root/RootContext";
import {useState} from "react";

const Root = () => {
    /*const [objects, setObjects] = useState({})*/
    const [objVisible,setObjVisible] = useState("d-block")
    const [usrVisible,setUsrVisible] = useState("d-none")

/*    const lgObjectsClick =  () =>{
        setObjVisible("d-block")
        setUsrVisible("d-none")
    }
    const lgUsersClick =  () =>{
        setObjVisible("d-none")
        setUsrVisible("d-block")
    }*/

/*    useEffect(()=> {
        fetchObjects().then(data => {setObjects(data)})
    },[])*/

    const context = {
/*        objects,
        setObjects,*/
/*        lgObjectsClick,
        lgUsersClick,*/
        objVisible,
        usrVisible,
        setObjVisible,
        setUsrVisible
    }

    return (
        <div>
            <RootContext.Provider value={context}>
                <NavBar role='ROOT'/>
                <div className="d-flex flex-row p-1" >
                    <RootListGroup />
                    <RootObjects />
                    <RootUsers />
                </div>
            </RootContext.Provider>
        </div>
    );
};

export default Root;