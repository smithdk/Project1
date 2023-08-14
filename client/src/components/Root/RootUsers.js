import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";
import {RootContext} from "../../store/Root/RootContext"
import {useContext} from "react";

const RootUsers = observer(() =>{
    const rootContext = useContext(RootContext)
    return(
       <Card className={`${rootContext.usrVisible}  m-0 flex-row col-10`} >
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
            RootUsers <br/>
        </Card>
    )
})

export default RootUsers;