import Vue from 'vue'
import Vuex from 'vuex'
import ads from "./ads";
import user from "./user";
import shared from "./shared";
import orders from "@/store/orders";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        ads,
        orders,
        shared
    }
})
