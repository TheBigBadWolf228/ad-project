<template lang="pug">

    div(v-if="!loading")
        v-container(fluid)
            v-row
                v-col(cols="12", xs="12")
                    v-carousel
                        v-carousel-item(v-for="ad in promoAds" :key="ad.id", :src="ad.imageSrc")
                            div(class="car-link")
                                v-btn(class="error", :to="'/ad/' + ad.id") {{ad.title}}

        v-container(grid-list-lg)
            v-row(wrap, align-content-start)
                v-col(xs="12", md="4", sm="6", v-for="ad in allAds" :key="ad.id")
                    v-card(max-width='400')
                        v-img.white--text.align-end(height='200px', :src="ad.imageSrc")
                            v-card-title {{ad.title}}
                        v-card-text.text--primary
                            div {{ad.description}}
                        v-card-actions
                            v-spacer
                            v-btn(text, :to="'/ad/' + ad.id")  OPEN
                            v-btn(raised, class="primary")  BUY
    div(v-else)
        v-container
            v-row
                v-col(xs12).text-xl-center.pt-5
                    v-progress-circular(indeterminate='', color='purple', :size="70")

</template>



<script>
    export default {
        name: "Home.vue",
        computed: {
            promoAds() {
                return this.$store.getters.promoAds
            },
            allAds() {
                return this.$store.getters.ads
            },
            loading() {
                return this.$store.getters.loading
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