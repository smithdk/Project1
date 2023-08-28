
const btnObjNewOnClick =  (context) =>{
    context.setBtnSaveEnable('')
    console.log('btnObjNewOnClick')
}

const btnObjSaveOnClick =  (context) =>{
    context.setBtnSaveEnable('disabled')
    console.log('btnObjSaveOnClick')
}

const btnUsrNewOnClick =  () =>{
   /* objectsContext.setBtnSaveEnable('')*/
    console.log('btnUsrNewOnClick')
}

const btnUsrSaveOnClick =  () =>{
  /*  objectsContext.setBtnSaveEnable('disabled')*/
    console.log('btnUsrSaveOnClick')
}

export {
    btnObjNewOnClick,
    btnObjSaveOnClick,
    btnUsrNewOnClick,
    btnUsrSaveOnClick
}