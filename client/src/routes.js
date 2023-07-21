import {LOGIN_ROUTE,EMPLOYEE_ROUTE,ADMINISTRATOR_ROUTE,DIRECTOR_ROUTE,ROOT_ROUTE} from "./utils/consts"
import Login from "./pages/Login";
import Employee from "./pages/Employee";
import Administrator from "./pages/Administrator";
import Root from "./pages/Root";
import Director from "./pages/Director";

export const loginRoutes = [
    {path: LOGIN_ROUTE, component: Login}
]

export const employeeRoutes = [
    {path: EMPLOYEE_ROUTE, component: Employee}
]

export const administratorRoutes = [
    {path: ADMINISTRATOR_ROUTE, component: Administrator}
]

export const directorRoutes = [
    {path: DIRECTOR_ROUTE, component: Director}
]

export const rootRoutes = [
    {path: ROOT_ROUTE, component: Root}
]
