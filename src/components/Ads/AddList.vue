<template lang="pug">
    v-container
        v-layout(row)
            v-flex(xs12, sm6, offset-sm3)
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