import {BrowserRouter, Switch, Route} from "react-router-dom";
import React  from "react";
import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";





 function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Signup" exact component={Signup}/>
                <Route path="/Signin" exact component={Signin}/>
                <PrivateRoute path="/user/dashboard" exact component={UserDashBoard}/>
                <AdminRoute path="/admin/dashboard" exact component={AdminDashBoard}/>
        
            </Switch> 
        </BrowserRouter>
    )
};

export default  Routes;