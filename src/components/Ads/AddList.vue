<template lang="pug">
    v-container
        v-row
            v-col(xs="12", sm="6", offset-sm="3")
                h1.text--secondary.mb-3 My ads
                v-card(v-for="ad in myAds", :key="ad.id").elevation-10.mb-4
                    v-img(:src="ad.imageSrc", height="100px")
                    v-card-text
                        h2.text--primary {{ad.title}}
                        p {{ad.description}}
                    v-card-actions
                        v-spacer
                        v-btn.info(:to="'/ad/' + ad.id") Open

</template>

<script>
    export default {
        name: "AddList",
        computed: {
            myAds() {
                 return this.$store.getters.myAds
            }
        }
    }
</script>

<style scoped>

</style>