import axios from "axios";
/*const [resp, setResp] = useState({})*/

/*export const fetchObjects = async () =>{
    return  await $host.get('api/object/')
}*/

export const fetchObjects = async () =>{
    return await axios.get(`${process.env.REACT_APP_API_URL}api/object/`)
}