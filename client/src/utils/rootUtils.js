
const btnObjNewOnClick =  (objectsContext) =>{
    objectsContext.setBtnSaveEnable('')
    console.log('btnNewOnClick')
}

const btnObjSaveOnClick =  (objectsContext) =>{
    objectsContext.setBtnSaveEnable('disabled')
    console.log('btnSaveOnClick')
}

const btnUsrNewOnClick =  (objectsContext) =>{
    objectsContext.setBtnSaveEnable('')
    console.log('btnNewOnClick')
}

const btnUsrSaveOnClick =  (objectsContext) =>{
    objectsContext.setBtnSaveEnable('disabled')
    console.log('btnSaveOnClick')
}

export {
    btnObjNewOnClick,
    btnObjSaveOnClick,
    btnUsrNewOnClick,
    btnUsrSaveOnClick
}