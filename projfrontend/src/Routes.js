import {BrowserRouter, Switch, Route} from "react-router-dom";
import React  from "react";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";



 function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Signup" exact component={Signup}/>
                <Route path="/Signin" exact component={Signin}/>
            </Switch>
        </BrowserRouter>
    )
};

export default  Routes;