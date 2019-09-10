import React, { Component } from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import detail from '../views/detail/'
import login from '../views/login/'
import citys from '../views/citys/'
import my from '../views/my/'
import order from '../views/order/'
import registry from '../views/registry/'
import shops from '../views/shops/'
import write from '../views/write/'
export default class Routers extends Component {
    render() {
        return (
            <div>
                <Redirect from="/" to="/detail"></Redirect>
                <Switch>
                    <Route path="/citys" component={citys}></Route>
                    <Route path="/detail" component={detail}></Route> 
                    <Route path="/my" component={my}></Route>
                    <Route path="/registry" component={registry}></Route>
                    <Route path="/order" component={order}></Route>
                    <Route path="/shops" component={shops}></Route>
                    <Route path="/write" component={write}></Route>
                    <Route path="/login" component={login}></Route>
                </Switch>
            </div>
        )
    }
}
