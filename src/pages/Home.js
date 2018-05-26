import {Header} from "../components/Header"
import {NavList} from "../components/Nav"
import {Banner} from "../components/Banner"

import jsonp from "fetch-jsonp"
import {Select} from "../components/Select"
import {GoodsList} from "../components/GoodsList"
import {Footer} from "../components/Footer"
import {connect} from "react-redux"
import {hInit} from "../actions";
class HomeUI extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.pageInit()
    }
    render(){
        return(
            <div>
                <Header text = {this.props.title} />
                <NavList list = {this.props.navList} />
                <div>
                    <Banner list = {this.props.bannerList} hasPag = {true} />
                    <Select />
                    <GoodsList list = {this.props.goodsList} />
                </div>
                <Footer />
            </div>
        )
    }
}
let msp = ({home}) => ({
    title : home.title,
    navList : home.navList,
    bannerList : home.bannerList,
    selectList : home.selectList,
    goodsList : home.goodsList
})

let mdp = dispath => ({
    pageInit(){

        dispath(hInit())
    }
})
export const Home = connect(msp,mdp)(HomeUI)


























//此处是最底部
