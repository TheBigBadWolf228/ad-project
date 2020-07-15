<template lang="pug">
    v-container
       v-row
            v-col(xs="12")
                v-card
                    v-img(:src="ad.imageSrc", height="300px")
                    v-card-text
                        h1.text--primary {{ad.title}}
                        p {{ad.description}}
                    v-card-actions
                        v-spacer
                        v-btn.secondary Edit
                        v-btn.primary Buy

</template>

<script>
    export default {
        name: "Add",
        props: ['id'],
        computed: {
            ad(){
                const id = this.id
                return this.$store.getters.adById(id)
            }
        }
    }
</script>

<style scoped>

</style>