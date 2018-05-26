import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import {Home} from "./pages/Home"
import {Boute} from "./pages/Bout"
import {Detail} from "./pages/Detail"
import {store} from "./store"
import {Shope} from "./pages/Shop"
import {Espee} from "./pages/Espe"
import {Mye} from "./pages/My"
import {Provider} from "react-redux"

export class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path = "/home" component={Home} />
                        <Route path = "/bout" component={Boute} />
                        <Route path = "/shop" component={Shope} />
                        <Route path = "/espe" component={Espee} />
                        <Route path = "/my" component={Mye} />
                        <Route path="/detail/:goodsID" component={Detail} />
                        <Redirect from = "/" to = "/home" exact={true} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}
















//
