export default {
    state: {
        ads: [
            {title: 'First ad', description: 'I am description', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: '123'},
            {title: 'Second ad', description: 'I am description', promo: true, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', id: '124'},
            {title: 'Third ad', description: 'I am description', promo: true, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', id: '125'}
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd({commit}, payload) {
            payload.id = Math.random().toString()

            commit('createAd', payload)
        }
    },
    getters : {
        ads(state) {
            return state.ads
        },
        promoAds(state){
            return state.ads.filter(ad => ad.promo)
        },
        myAds(state) {
            return state.ads
        },
        adById(state){
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}