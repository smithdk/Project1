import React from "react";
import {BrowserRouter} from "react-router-dom";
import {observer} from "mobx-react-lite";

const App = observer( () => {
  return (
    <BrowserRouter>
        WORKING!
    </BrowserRouter>
  );
})

export default App;
