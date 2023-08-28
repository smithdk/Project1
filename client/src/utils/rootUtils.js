
const btnObjNewOnClick =  (context,rootState) =>{
    rootState.btnSaveEnable('')
   /* context.setBtnSaveEnable('')*/
    console.log('btnObjNewOnClick')
}

const btnObjSaveOnClick =  (context,rootState) =>{
    rootState.btnSaveEnable('disabled')
    /*context.setBtnSaveEnable('disabled')*/
    console.log('btnObjSaveOnClick')
}

const btnUsrNewOnClick =  (rootState) =>{
    rootState.btnSaveEnable('')
   /* objectsContext.setBtnSaveEnable('')*/
    console.log('btnUsrNewOnClick')
}

const btnUsrSaveOnClick =  (rootState) =>{
    rootState.btnSaveEnable('disabled')
  /*  objectsContext.setBtnSaveEnable('disabled')*/
    console.log('btnUsrSaveOnClick')
}

export {
    btnObjNewOnClick,
    btnObjSaveOnClick,
    btnUsrNewOnClick,
    btnUsrSaveOnClick
}