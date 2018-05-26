import {DETAIL_INIT} from "../base/actionType";
export const detail = (state,action)=>{
    switch(action.type){
        case DETAIL_INIT:
            let ns = {...state}
            ns.goods = action.goods
            return ns
            break
        default:
            return state
    }
}
