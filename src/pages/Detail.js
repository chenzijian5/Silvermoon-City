import {Header} from "../components/Header";
import {Banner} from "../components/Banner";
import jsonp from "fetch-jsonp";
import {dInit} from "../actions";
import {connect} from "react-redux"
class DetailUI extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        let goodsID = this.props.match.params.goodsID;
        this.props.getInit(goodsID)
    }
    render(){
        return(
            <div>
                <Header text={this.props.title}  hasBack={this.props.history} />
                <div id="detailBan">
                    <Banner  list={this.props.goods.list} />
                </div>
                <h3 id="detailH3"><b>{this.props.goods.goodsName}</b></h3>
                <p id="detailP1">¥{this.props.goods.price}</p>
                <div id="detailPart">商品详情<p>{this.props.goods.detail}</p></div>
                <div id="detailF">
                    <div className="detailFoot">
                        <div className = {"iconfont " + "icon-kefu"}></div>
                        <p>客服</p>
                    </div>
                    <div className="detailFoot">
                        <div className = {"iconfont " + "icon-dianpu"}></div>
                        <p>店铺</p>
                    </div>
                    <div className="detailFoot">
                        <div className = {"iconfont " + "icon-shoucang-copy"}></div>
                        <p>收藏</p>
                    </div>
                    <div id="detailPush">
                        加入购物车
                    </div>
                    <div id="detailBuy">
                        立即购买
                    </div>
                </div>
            </div>
        )
    }
}
let msp = ({detail},props)=>({
    title : detail.title,
    goods : detail.goods
})
let mdp = (dispatch,props) => ({
    getInit(){
        let goodsID = props.match.params.goodsID;
        dispatch(dInit(goodsID))
    }
})
export const Detail = connect(msp,mdp)(DetailUI)















//
