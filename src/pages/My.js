import {Footer} from "../components/Footer"
import jsonp from "fetch-jsonp"
import {connect} from "react-redux"
import {hInit} from "../actions";
class MyUI extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id = "myBox">
                <div id="myDiv1">
                    <img src="./images/Screenshot_20180521-164006_02.jpg" />
                </div>
                <div id="myDiv2">
                    <ul>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                        <li>
                            <div  className = "iconfont icon-order">我的订单</div>
                            <span className = "iconfont icon-jiantou"></span>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}

let msp = ({my}) => ({
})

let mdp = dispath => ({
    pageInit(){
        dispath(hInit())
    }
})
export const Mye = connect(msp,mdp)(MyUI)
