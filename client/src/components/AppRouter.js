import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {loginRoutes, employeeRoutes, administratorRoutes, rootRoutes, directorRoutes} from "../routes"
import {LOGIN_ROUTE} from "../utils/consts";


const AppRouter = observer(() => {
   return (
        <Routes>
            {loginRoutes.map(({path, component})=>
                <Route key = {path} path={path} Component={component} exact />
            )}
            {employeeRoutes.map(({path, component})=>
                <Route key = {path} path={path} Component={component} exact />
            )}
            {administratorRoutes.map(({path, component})=>
                <Route key = {path} path={path} Component={component} exact />
            )}
            {directorRoutes.map(({path, component})=>
                <Route key = {path} path={path} Component={component} exact />
            )}
            {rootRoutes.map(({path, component})=>
                <Route key = {path} path={path} Component={component} exact />
            )}
            <Route path="*"  element={<Navigate to={LOGIN_ROUTE} replace />}/>
        </Routes>
    );
});


export default AppRouter;