import {observer} from "mobx-react-lite";
import {Card} from "react-bootstrap";
import {RootContext} from "../../store/Root/RootContext"
import {useContext} from "react";

const RootObjects = observer(() =>{

    const rootContext = useContext(RootContext)
    console.log(rootContext.objects.data)

return(
    <Card >
        RootObjects
    </Card>
    )
})

export default RootObjects;