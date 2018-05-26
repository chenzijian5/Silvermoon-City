import {HOME_INIT,GOODS_INIT,DETAIL_INIT,BOUT_INIT,SHOP_INIT,ESPE_INIT,MY_INIT} from "../base/actionType"
import jsonp from "fetch-jsonp"
import async from "async"
import {getBanner, getNav,getGoods,getGoodsById} from "../service/getData";
export const hSetData = data => ({type:HOME_INIT,...data})
export const gSetData = list => ({type:GOODS_INIT,list})
export const dSetData = goods => ({type:DETAIL_INIT,goods})
export const bSetData = bout => ({type:BOUT_INIT,...bout})
export const sSetData = shop => ({type:SHOP_INIT,shop})
export const eSetData = espe => ({type:ESPE_INIT,...espe})
export const mSetData = my => ({type:MY_INIT,my})
export const hInit = () =>{
    return (dispatch, state) =>{
        async.parallel({
            bannerList(cb){
                getBanner(bannerList=>{
                    cb(null,bannerList)
                })
            },
            navList(cb){
                getNav(navList=>{
                    cb(null,navList)
                })
            },
            goodsList(cb){
                getGoods(goodsList=>{
                    cb(null,goodsList)
                })
            }
        },(err,data)=>{
            dispatch(hSetData(data));
            dispatch(eSetData(data));
            dispatch(bSetData(data));
        })
    }
}
export const gInit = () =>{
    return (dispatch,state)=>{
        getGoods(goodsList=>{
            dispatch(gSetData(goodsList));
        })
    }
}
export const dInit = (goodsID)=>{
    return (dispatch,state)=>{
        getGoodsById(goods=>{
            dispatch(dSetData(goods));
        },goodsID)
    }
}

















//
