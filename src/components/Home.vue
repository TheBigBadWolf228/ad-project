<template lang="pug">

    div
        v-container(fluid)
            v-row
                v-col(cols="12", xs="12")
                    v-carousel
                        v-carousel-item(v-for="ad in ads" :key="ad.id", :src="ad.imageSrc")
                            div(class="car-link")
                                v-btn(class="error", :to="'/ad/' + ad.id") {{ad.title}}

        v-container(grid-list-lg)
            v-row(wrap, align-content-start)
                v-col(xs="12", md="4", sm="6", v-for="ad in ads" :key="ad.id")
                    v-card(max-width='400')
                        v-img.white--text.align-end(height='200px', :src="ad.imageSrc")
                            v-card-title {{ad.title}}
                        v-card-text.text--primary
                            div {{ad.description}}
                        v-card-actions
                            v-spacer
                            v-btn(text, :to="'/ad/' + ad.id")  OPEN
                            v-btn(raised, class="primary")  BUY
</template>



<script>
    export default {
        name: "Home.vue",
        data () {
            return {
                ads: [
                    {title: 'First ad', description: 'I am description', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: '123'},
                    {title: 'Second ad', description: 'I am description', promo: true, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', id: '124'},
                    {title: 'Third ad', description: 'I am description', promo: true, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', id: '125'}
                ]
            }
        }
    }
</script>

<style scoped>
    .car-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translate(-50%, 0);
        padding: 5px 10px;
    }
</style>