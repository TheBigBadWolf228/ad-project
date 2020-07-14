<template lang="pug">
    v-container
        v-row
            v-col(xs="12", sm="6", offset-sm="3")
                h1.text--secondary.mb-3 My ads
                v-card(v-for="ad in ads", :key="ad.id").elevation-10.mb-2
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
        data() {
            return {
                ads: [
                    {title: 'First ad', description: 'I am description', promo: false, imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: '123'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>