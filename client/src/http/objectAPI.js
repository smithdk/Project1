import {$host} from "./index";

console.log($host.get('api/object/'))

export const fetchObjects = async () =>{
    return  await $host.get('api/object/')
}