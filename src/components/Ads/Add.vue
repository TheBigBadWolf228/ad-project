<template lang="pug">
    v-container
       v-row
            v-col(xs="12")
                v-card(v-if="!loading")
                    v-img(:src="ad.imageSrc", height="300px")
                    v-card-text
                        h1.text--primary {{ad.title}}
                        p {{ad.description}}
                    v-card-actions
                        v-spacer
                        addEditAdModal(:ad="ad", v-if="isOwner")
                        app-buy-modal(:ad="ad")
                div(v-else)
                    v-container
                        v-row
                            v-col(xs12).text-xl-center.pt-5
                                v-progress-circular(indeterminate='', color='purple', :size="70")
</template>

<script>
    import EditAdModal from "@/components/Ads/EditAdModal";
    export default {
        name: "Add",
        props: ['id'],
        computed: {
            ad() {
                const id = this.id
                return this.$store.getters.adById(id)
            },
            loading() {
                return this.$store.getters.loading
            },
            isOwner() {
                return this.ad.ownerId === this.$store.getters.user.id
            }
        },
        components: {
            addEditAdModal: EditAdModal
        }
    }
</script>

<style scoped>

</style>