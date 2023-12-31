import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap"
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import {ROOT_ROUTE} from "../utils/consts";
/*import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom";
import AlertMessage from "../components/AlertMessage"
import {ADMIN_ROUTE, ERR_USER_NOT_FOUND, LOGIN_ROUTE, ROOT_ROUTE, USER_ROUTE} from "../utils/consts";
import {login} from "../http/userAPI";*/

/*import {Context} from "../index";*/

const Login = observer(() => {
//    const location = useLocation()
    const navigate = useNavigate()
/*    const [alertVisible, setAlertVisible] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {user} = useContext(Context)*/
/*
    const inputFocus = () => {
        setAlertVisible(false)
        return true
    }*/

    const buttonClick = async () => {
        try {
            navigate(ROOT_ROUTE)
/*                    const data = await login(username, password)
                    //console.log(username, password)
                    //console.log(data.role)
                    //console.log(data)
                    user.setUserRole(data.role)
                    switch (data.role){
                        case 'ROOT': navigate(ROOT_ROUTE); break;
                        case 'ADMIN': navigate(ADMIN_ROUTE); break;
                        case 'USER': navigate(USER_ROUTE); break;
                        default: navigate(LOGIN_ROUTE); setAlertVisible(true);
                    }*/
             }catch (e) {
/*                    console.log(e)
                    setAlertVisible(true)*/
             }
         }


    return (
        <>
{/*            <Container fluid className="fixed-top p-0" >
                <AlertMessage show={alertVisible} message= {ERR_USER_NOT_FOUND}  type="danger"/>
            </Container>*/}
            <Container
                className="d-flex justify-content-center align-items-center "
                style={{height: window.innerHeight - 100}}
            >
                <Card style={{width: 600}} className="p-4" >
                    <h2 className="m-auto">Авторизация</h2>
                    <Form className="d-flex flex-column" >
                        <Form.Control
                            name = "usernameInput"
                            className="mt-3"
                            placeholder="Введите логин"
/*                            onFocus={inputFocus}
                            value={username}
                            onChange={e => setUsername(e.target.value)}*/
                        />
                        <Form.Control
                            name = "passwordInput"
                            type="password"
                            className="mt-3"
                            placeholder="Введите пароль"
/*                            onFocus={inputFocus}
                            value={password}
                            onChange={e => setPassword(e.target.value)}*/
                        />
                        <Button className="mt-3 align-self-end"  onClick={buttonClick} > Войти </Button>
                    </Form>
                </Card>
            </Container>
        </>
    );
});

export default Login;