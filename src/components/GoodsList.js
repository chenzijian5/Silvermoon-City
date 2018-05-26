import {Link} from "react-router-dom";
let Goods = (props)=>{
    return (
        <li>
            <Link className="goods-item" to={"/detail/"+props.goods.goodsID}>
                <div className = "img-box">
                    <img src={props.goods.imgSrc} />
                </div>
                <div className="content-box">
                    <h3>{props.goods.goodsName}</h3>
                    <p className = "price">
                        <span>¥{props.goods.price}</span>
                        <del>¥{props.goods.oldPrice}</del>
                    </p>
                    <p className="discount">
                        {props.goods.discount == 10 ? 0 : props.goods.discount}折
                    </p>
                </div>
            </Link>
            <a href = "javascript:;" className = "shopCar-btn iconfont icon-gouwu"></a>
        </li>
    )
}

export class GoodsList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        let domList = this.props.list.map((god,i)=>{
            return <Goods key={i} goods={god} />
        })

        return (
            <ul className="goods-list">
                {domList}
            </ul>
        )
    }
}






















//
