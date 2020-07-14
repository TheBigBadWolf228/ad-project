<template lang="pug">
    v-container
       v-row
            v-col(xs="12")
                v-card
                    v-img(:src="image", height="300px")
                    v-card-text
                        h1.text--primary Lorem
                        p Lorem10 Lorem10 Lorem10Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10 Lorem10
                    v-card-actions
                        v-spacer
                        v-btn.secondary Edit
                        v-btn.primary Buy

</template>

<script>
    export default {
        name: "Add",
        data() {
            return {
                image: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
            }
        }
    }
</script>

<style scoped>

</style>