import {BOUT_INIT} from "../base/actionType";

export const bout = (state,action)=>{
    switch(action.type){
        case BOUT_INIT:
            let ns = {...state}
            ns.goods = action.goods
            ns.goodsList = action.goodsList
            return ns
            break;
        default:
            return state
    }
}
