import {SHOP_INIT} from "../base/actionType";

export  const shop = (state, action) => {
    switch(action.type){
        case SHOP_INIT:
            let ns = {...state}
            ns.bannerList = action.bannerList
            ns.navList = action.navList
            return ns
            break
        default:
            return state
    }
}
