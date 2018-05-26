import {home} from "./homeReducer";
import {detail} from "./detailReducer";
import {bout} from "./boutReducer.js";
import {shop} from "./shopReducer.js";
import {espe} from "./espeReducer.js";
import {my} from "./espeReducer.js"
export const reducer = (state,action)=>{
    return{
        home : home(state.home,action),
        detail : detail(state.detail,action),
        bout : bout(state.bout,action),
        shop : shop(state.shop,action),
        espe : espe(state.espe,action),
        my : espe(state.my,action)
    }
}
