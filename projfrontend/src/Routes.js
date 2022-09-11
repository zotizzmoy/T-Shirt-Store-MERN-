import {BrowserRouter, Switch, Route} from "react-router-dom";
import React  from "react";
import Home from "./core/Home";
import Signup from "./user/Signup";



 function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Signup" exact component={Signup}/>
            </Switch>
        </BrowserRouter>
    )
};

export default  Routes;