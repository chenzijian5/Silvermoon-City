export class Header extends React.Component{
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.props.hasBack.goBack();
    }
    render(){
        let shopBtn = null;
        let backBtn = null;
        if (this.props.hasShop){
            shopBtn = <a href = "javascript:;" className = "shop-btn iconfont icon-shitu"></a>;
        }
        if(this.props.hasBack){
            backBtn = <a href = "javascript:;" onClick = {this.goBack} className = "back-btn iconfont icon-back"></a>
        }
        return(
            <header>
                {backBtn}
                <h2>{this.props.text}</h2>
                {shopBtn}
            </header>
        )
    }
}
