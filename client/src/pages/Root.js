import NavBar from "../components/NavBar"
import RootListGroup from "../components/Root/RootListGroup";
import RootObjects from "../components/Root/RootObjects";
import RootUsers from "../components/Root/RootUsers";
import {RootContext} from "../store/Root/RootContext";
import {useEffect, useState} from "react";
import {fetchObjects} from "../http/objectAPI";
/*
import RootObjects from "../components/RootObjects";
import RootUsers from "../components/RootUsers";


import {useState} from "react";*/

const Root = () => {
    const [objects, setObjects] = useState({})
    useEffect(()=> {
        fetchObjects().then(data => setObjects(data))
    },[])

/*    const [isObjectsShow, setIsObjectsShow] = useState(true)
    const [isUsersShow, setIsUsersShow] = useState(false)
    const [objects, setObjects] = useState({})

    const showObjects = () =>{
        setIsObjectsShow(true);
        setIsUsersShow(false)
    }
    const showUsers = () =>{
        setIsObjectsShow(false);
        setIsUsersShow(true)
    }
    console.log('Root.js')*/
    return (
        <div className="m-1">
            <RootContext.Provider value={{objects, setObjects}}>
{/*            <RootContext.Provider value={{isObjectsShow, isUsersShow, showObjects, showUsers,objects, setObjects}}>*/}
                <NavBar role='ROOT'/>
                <div className=" d-flex flex-row " style={{marginRight : 4 , marginTop: 4}}>
                    <RootListGroup />
                    <RootObjects />
                    <RootUsers />
                </div>
            </RootContext.Provider>
        </div>
    );
};

export default Root;