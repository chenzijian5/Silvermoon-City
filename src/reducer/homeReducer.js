import {HOME_INIT} from "../base/actionType";

export  const home = (state, action) => {
    switch(action.type){
        case HOME_INIT:
            let ns = {...state}
            ns.bannerList = action.bannerList
            ns.navList = action.navList
            ns.goodsList = action.goodsList
            return ns
            break
        default:
            return state
    }
}
