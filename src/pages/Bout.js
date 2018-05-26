import {Header} from "../components/Header"
import jsonp from "fetch-jsonp"
import {Bout} from "../components/Bout"
import {GoodsList} from "../components/GoodsList"
import {Footer} from "../components/Footer"
import {connect} from "react-redux"
import {hInit} from "../actions";
class BoutUI extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.pageInit()
    }

    render(){
        return(
            <div>
                <Header text={this.props.title} hasShop={true} hasBack={this.props.history} />
                <div className="main">
                    <Bout />
                    <GoodsList list = {this.props.goodsList}/>
                </div>
                <Footer />
            </div>
        )
    }
}
let msp = ({bout}) => ({
    title : bout.title,
    goodsList : bout.goodsList
})
let mdp = dispath => ({
    pageInit(){
        dispath(hInit())
    }
})
export const Boute = connect(msp,mdp)(BoutUI)





























//
