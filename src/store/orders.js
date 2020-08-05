import firebase from "firebase";

class Order {
    constructor(name, phone, adId, done = false, id = null) {
        this.name = name
        this.phone = phone
        this.adId = adId
        this.done = done
        this.id = id
    }
}

export default {
    state: {
        orders: []
    },
    mutations: {
        loadOrders(state, payload) {
            state.orders = payload
        }
    },
    actions: {
        async createOrder({commit}, {name, phone, adId, ownerId}) {
            const order = new Order(name, phone, adId)
            commit('clearError', true)
            try{
                await firebase.database().ref(`/users/${ownerId}/orders`).push(order)
            }catch (e) {
                commit('setError', e.message)
                throw e
            }
        },
        async fetchOrders({commit, getters}){
            commit('setLoading', true)
            commit('clearError', true)

            const resultOrders = []

            try{
                const firebaseValue = await firebase.database().ref(`/users/${getters.user.id}/orders`).once('value')
                const orders = firebaseValue.val()

                Object.keys(orders).forEach(key => {
                    const order = orders[key]
                    resultOrders.push(new Order(
                        order.name,
                        order.phone,
                        order.adId,
                        order.done,
                        key
                    ))
                })

                commit('loadOrders', resultOrders)
                commit('setLoading', false)
            }catch (e) {
                commit('setLoading', false)
                commit('setError', e.message)
            }

        },
        async markOrderDone({commit, getters}, payload){
            try{
                commit('clearError')
                await firebase.database().ref(`/user${getters.user.id}/orders`).child(payload).update({
                    done: true
                })
            }catch (e) {
                commit('setError', e.message)
                throw  e
            }
        }
    },
    getters: {
        doneOrders(state) {
            return state.orders.filter(order => order.done)
        },
        undoneOrders(state) {
            return state.orders.filter(order => !order.done)
        },
        orders(state, getters) {
            return getters.undoneOrders.concat(getters.doneOrders)
        }
    }
}