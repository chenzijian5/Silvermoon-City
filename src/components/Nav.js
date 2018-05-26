import Swiper from "swiper"
require("swiper/dist/css/swiper.min.css");
import {Link} from "react-router-dom";
let Navs = (props)=>{
    return(
        <div id="navD">
            <p>{props.nav.navsID}</p>
        </div>
    )
}
export class NavList extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidUpdate(){
        if(this.props.list.length != 0){
            let option = {
                loop:true
            };
        }
    }
    render(){

        let sa = this.props.list.map((nv,i)=>{
            return <Navs key={i} nav={nv}/>
        })

        return(
            <div id="navBox">
                {sa}
            </div>
        )
    }
}
