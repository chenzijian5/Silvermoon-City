import {MY_INIT} from "../base/actionType";
export const my = (state,action) => {
    switch(action.type){
        case MY_INIT:
            let ns = {...state}
            return ns
            break
        default:
            return state
    }
}
