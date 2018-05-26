import Swiper from "swiper"
require("Swiper/dist/css/swiper.min.css");
export class Banner extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        if(this.props.list.length != 0){
            let option = {
                loop:true

            };
            if(this.props.hasPag){
                option.pagination={
                    el:'.swiper-pagination'
                }
            }
            if(this.props.hasBtn){
                option.navigation = {
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                }
            }
            let sname = this.props.cName ? `.${this.props.cName}` : ".banner";
            this.swiper = new Swiper(sname,option);
        }
    }
    componentDidUpdate(){
        if(this.props.list.length != 0){
            let option = {
                loop:true,
                autoplay:true,
                delay:2000
            };

            if(this.props.hasPag){
                option.pagination = {
                    el:'.swiper-pagination'
                }
            }

            if(this.props.hasBtn){
                option.navgation = {
                    nextEl:'.swiper-button-next',
                    prevEl:'.swiper-button-prev',
                }
            }

            let sname = this.props.cName ? `.${this.props.cName}` : ".banner";

            this.swiper = new Swiper(sname,option);
        }
    }

    render(){
        let sl = this.props.list.map((ban,i)=>{
            return(
                <div className="swiper-slide" key={i}>
                    <img src={ban.imgSrc} />
                </div>
            )
        })

        let pb = this.props.hasBtn ? <div className="swiper-button-prev"></div> : null;

        let nb = this.props.hasBtn ? <div className="swiper-button-next"></div> : null;

        let pag = this.props.haspag ? <div className="swiper-pagination"></div> : null;

        return(
            <div  className={"banner bannerBox swiper-container" + this.props.cName}>
                <div className={"swiper-wrapper"} id="bannerImg">
                    {sl}
                </div>
                {pag}
                {pb}
                {nb}
            </div>
        )
    }
}

















//
