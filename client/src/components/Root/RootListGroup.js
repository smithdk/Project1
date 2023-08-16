import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
import {useContext} from "react"
import {RootContext} from "../../store/Root/RootContext"

const RootListGroup = observer(() =>{
    const rootContext = useContext(RootContext);

    const setItemObjectsVisible = () => {
        rootContext.setObjVisible("d-block")
        rootContext.setUsrVisible("d-none")
    }
    const setItemUsersVisible = () => {
        rootContext.setUsrVisible("d-block")
        rootContext.setObjVisible("d-none")

    }

    return (
        <div className="col-2" style={{marginRight: 4} }>
        <ListGroup >
            <ListGroup.Item action variant="danger" onClick={setItemObjectsVisible} >
                Объекты
            </ListGroup.Item>
            <ListGroup.Item action variant="danger" onClick={setItemUsersVisible}>
                Пользователи
            </ListGroup.Item>
        </ListGroup>
     < /div>
    );
})

export default RootListGroup;
