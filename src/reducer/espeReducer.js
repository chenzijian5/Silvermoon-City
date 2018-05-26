import {ESPE_INIT} from "../base/actionType";

export  const espe = (state, action) => {
    switch(action.type){
        case ESPE_INIT:
            let ns = {...state}
            ns.navList = action.navList
            ns.goodsList = action.goodsList
            return ns
            break
        default:
            return state
    }
}
