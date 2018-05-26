import { Header } from "../components/Header"
import {NavList} from "../components/Nav"
import jsonp from "fetch-jsonp"
import { GoodsList } from "../components/GoodsList"
import { Footer } from "../components/Footer"
import {connect} from "react-redux"
import { hInit } from "../actions";

class EspeUI extends React.Component {
    constructor(props) {
        super(props)

    }
    componentDidMount(){
        this.props.pageInit()
    }
    render(){
        return(
            <div>
                <Header text={this.props.title} />
                <NavList list = {this.props.navList} />
                <div>
                    <GoodsList list={this.props.goodsList} />
                </div>
                <Footer />
            </div>
        )
    }
}

let msp = ({espe}) => ({
    title : espe.title,
    navList : espe.navList,
    goodsList : espe.goodsList,
})

let mdp = dispath => ({
    pageInit(){
        dispath(hInit())
    }
})

export const Espee = connect(msp,mdp)(EspeUI)
