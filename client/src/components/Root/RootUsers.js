import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";

const RootUsers = observer(() =>{
    /*const [visible, setVisible] = useState('d-none')*/
/*    const rootContext  = useContext(RootContext)
    let VISIBLE ;
    rootContext.isUsersShow ? VISIBLE = "col-10 d-block p-2": VISIBLE = "col-10 d-none";*/
    return(
       <Card >
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