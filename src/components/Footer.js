import {NavLink} from "react-router-dom"
let Item = props =>{
    return(
        <li>
            <NavLink to={props.path}>
                <div className = {"iconfont " + props.icon}></div>
                <p>{props.text}</p>
            </NavLink>
        </li>
    )
}
export class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            navList:[
                {text:"首页",path:"/home",icon:"icon-shouye"},
                {text:"精品搜",path:"/bout",icon:"icon-sousuo"},
                {text:"值得买",path:"/shop",icon:"icon-jingpin"},
                {text:"超值购",path:"/espe",icon:"icon-gouwu"},
                {text:"个人中心",path:"/my",icon:"icon-Icon_user"}
            ]
        }
    }
    render(){
        let domList = this.state.navList.map((nav,i)=>{
            return <Item key={i} {...nav} />
        })
        return (
            <footer>
                <ul>
                    {domList}
                </ul>
            </footer>
        )
    }
}
