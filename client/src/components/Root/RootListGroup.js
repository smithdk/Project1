import {observer} from "mobx-react-lite";
import {ListGroup} from "react-bootstrap";
/*import {useContext} from "react"
import {RootContext} from "../store/Root/RootContext";*/

const RootListGroup = observer(() =>{
  /*  const rootContext = useContext(RootContext);*/

    return (
        <div className="col-2" style={{marginRight: 4} }>
        <ListGroup >
            <ListGroup.Item action variant="danger" >
                Объекты
            </ListGroup.Item>
            <ListGroup.Item action variant="danger" >
                Пользователи
            </ListGroup.Item>
        </ListGroup>
     < /div>
    );
})

export default RootListGroup;
